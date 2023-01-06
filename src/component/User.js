import axios from 'axios'
import React, { useState,useEffect } from 'react'
import baseurl from '../services/baseurl'
import { ApiContext, ApiTextCity } from '../services/contextApiControll'
import {useParams} from 'react-router-dom'
function User() {
    const {userId} = useParams()
    const [users,setUsers] = useState([])
    const [text,setText] = useState('')
    const [loading,setLoading] = useState(false)
    const searchCity =  (e)=>{
if(e.key === 'Enter'){
    setLoading(true)
axios.get(`${baseurl}/data/2.5/weather?q=${text}&appid=cdd8edf9dbab3db68f18beee5eb1591e`).then((res)=>{
    setUsers(res.data)
    setLoading(false)
}).catch((error)=>{
    console.log(error)
})
}

    }
    const findCity =  (e)=>{
        if(userId){
            setLoading(true)
        axios.get(`${baseurl}/data/2.5/weather?q=${userId }&appid=cdd8edf9dbab3db68f18beee5eb1591e`).then((res)=>{
            setUsers(res.data)
            setLoading(false)
        }).catch((error)=>{
            console.log(error)
        })
        }
            }
        useEffect(()=>{
            findCity()
        },[userId])

const handleChange = (e)=>{
    setText(e.target.value)
}  
console.log(users,text)
return (
    <div className='weather__main-location'>
        {loading ? <div className='flex'> 

            <div className="spinner-border" role="status">
  <span className="sr-only"></span>
</div>
        </div> : 
        (<>
        <input type="text" placeholder='لطفا نام شهر مورد نظر را وارد و اینتر را بزنید' value={text} onChange={handleChange} onKeyDown={searchCity}/>
        <h2>{users?.name}</h2>
      <div className='weather__main-header'>
{users.main ?<div className='weather__main-type'> <span >دمای امروز</span> <h1>{users.main.temp} F</h1></div> : null}
{users.main ? <div className='weather__main-type'><span >بالا ترین دمای امروز</span> <h1>{users.main.temp_max} F</h1> </div>: null}
{users.main ? <div className='weather__main-type'><span >پایین ترین دمای امروز</span> <h1>{users.main.temp_min} F</h1> </div>: null}
{users.wind ? <div className='weather__main-type'><span >سرعت باد</span> <h1>{users.wind.speed}</h1> </div>: null}
      </div>
      <div className='weather__main-content'>
        {users.weather ? <div className='weather__main-type'><span> وظعیت آب و هوا</span><h1>{users.weather[0].main}</h1></div> : null}
      </div>
      <div className='weather__main-weather'></div>
        </>)
        }

    </div>
  )
}

export default User
