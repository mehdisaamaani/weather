import axios from "axios"
import { useDispatch } from "react-redux"
import baseurl from "../../services/baseurl"
import { ERROR_REQUEST_WEATHER, RESEVE_REQUEST_WEATHER, SEND_REQUEST_WEATHER } from "./typesWeather"


export const setSendRequest = ()=>{
    return {
        type:SEND_REQUEST_WEATHER,
    }
}

export const setReseveRequest = (data)=>{
    return{
        type:RESEVE_REQUEST_WEATHER,
        payload:data
    }
}

export const setErrorRequest = (data)=>{
    return {
        type:ERROR_REQUEST_WEATHER,
        payload:data
    }
}

export const  getWeaderUrl = (query)=>{
   
    return dispatch=> {
dispatch(setSendRequest())
axios.get(`${baseurl}/data/2.5/weather?q=${query}&appid=cdd8edf9dbab3db68f18beee5eb1591e`)
.then(res=>dispatch(setReseveRequest(res.data))).catch(error=>dispatch(setErrorRequest(error.message)))
    }

}