import {useEffect, useState} from 'react'
import { ApiContext } from "./contextApiControll";
import axios from 'axios'
import baseurl from './baseurl';
function Store({children}){
    const [users,setUsers] = useState([])
    const [text,setText] = useState('')
    useEffect(()=>{
        axios.get(`${baseurl}/data/2.5/weather?q=${text}&appid=cdd8edf9dbab3db68f18beee5eb1591e`).then((res)=>{
            setUsers(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    return (
        <ApiContext.Provider value={[users,setUsers]}>
            {children}
        </ApiContext.Provider>
    )
}

export default Store