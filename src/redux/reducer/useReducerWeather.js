import { ERROR_REQUEST_WEATHER, RESEVE_REQUEST_WEATHER, SEND_REQUEST_WEATHER } from "../action/typesWeather"



const init = {
    loading:false,
    weather:{},
    errorMesage:''
}

const useReducerWeather = (state =init,action)=>{
switch(action.type){
    case SEND_REQUEST_WEATHER:
        return {...state,loading:true}
    case RESEVE_REQUEST_WEATHER:
        return{loading:false,weather:action.payload,errorMesage:''}
   case ERROR_REQUEST_WEATHER:
        return{loading:false,weather:{},errorMesage:'test'}
        default: 
        return state
}
}

export default useReducerWeather;