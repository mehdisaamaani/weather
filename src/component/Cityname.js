import React from 'react'
import {cityname} from '../services/city-list.js'
import {useNavigate,createSearchParams} from 'react-router-dom'
function Cityname() {
  const navigate = useNavigate()
  const test = (id)=>{
    navigate(`/user/${id}`)
      
  }
  return (
    <div >
   <table className="table">
  <thead>
    <tr>
      <th scope="col">شناسه</th>
      <th scope="col">شهر</th>
      <th scope="col">کشور</th>
    </tr>
  </thead>
  <tbody>
    {cityname.map(city=>
     <tr onClick={()=>test(city.name)} className="list__city">
     <th scope="row">{city.id}</th>
     <td>{city.name}</td>
     <td>{city.country}</td>
   </tr>
    )}
   
  </tbody>
</table>
    </div>
  )
}

export default Cityname
