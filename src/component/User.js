import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getWeaderUrl } from '../redux/action/weather';
function User() {
    const { userId } = useParams()
    const [text, setText] = useState('')
    const { loading, weather, errorMessage } = useSelector(state => state)
    const dispatch = useDispatch()

    const searchCity = (e) => {
        if (e.key === 'Enter') {

            dispatch(getWeaderUrl(text))
        }
    }
    const findCity = (e) => {
        if (userId) {
            dispatch(getWeaderUrl(userId))
        }
    }
    useEffect(() => {
        findCity()
    }, [])

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div className='weather__main-location'>
            {loading ? <div className='flex'>

                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div> :
                (<>
                    <input type="text" placeholder='لطفا نام شهر مورد نظر را وارد و اینتر را بزنید' value={text} onChange={handleChange} onKeyDown={searchCity} />
                    <h2>{weather?.name}</h2>
                    <div className='weather__main-header'>
                        {weather.main ? 
                        <>
                        <div className='weather__main-type'> <span >دمای امروز</span> <h1>{Math.round(weather.main.temp)} F</h1></div>
                        <div className='weather__main-type'><span >بالا ترین دمای امروز</span> <h1>{weather.main.temp_max} F</h1> </div>
                        <div className='weather__main-type'><span >پایین ترین دمای امروز</span> <h1>{weather.main.temp_min} F</h1> </div>
                        <div className='weather__main-type'><span >سرعت باد</span> <h1>{weather.wind.speed}</h1> </div>
                        </>
                    : null}
                      
                    </div>
                    <div className='weather__main-content'>
                        {weather.weather ? <div className='weather__main-type'><span> وظعیت آب و هوا</span><h1>{weather.weather[0].main}</h1></div> : null}
                    </div>
                    <div className='weather__main-weather'></div>
                </>)
            }

        </div>
    )
}

export default User
