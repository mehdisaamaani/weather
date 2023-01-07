import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer/useReducerWeather'


 const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))


 export default store