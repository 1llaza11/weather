import React from 'react';


const CurrentDay = ({setCity,getWeather,weather,temp,setTemp,toDate,getWeatherForFiveDay,setDay}) => {
    return (
        <section className={'weather'}>
            <div className="weather__block">
                <h1 className={'weather__title'}>Прогноз погоды</h1>
                <div className={'weather__form'}>
                    <input type="text" onChange={(e) => setCity(e.target.value)} className="weather__input"/>
                    <button type='button' className="weather__btn" onClick={() => {
                        getWeather()
                        setDay(0)}} >Получить</button>
                </div>
                {JSON.stringify(weather) === '{}'
                    ? ''
                    : <>
                        <div className={'weather__top'}>
                            <h2  className={'weather__humidity'}>{weather.name}</h2>
                            <p className="weather__country">{weather.sys.country}</p>
                        </div>
                        <div className={'weather__temps'}>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                            <p className={'weather__temp'}>
                                {temp === 'C'
                                    ? Math.round(weather.main.temp -273.15)
                                    :  Math.round((weather.main.temp -273.15) * 9/5 + 32)
                                }
                            </p>
                            <div className="weather__switch">
                              <span className={temp === 'C'? 'active' : ""} onClick={() => setTemp('C')}>
                                 °C
                              </span>
                                <span className={temp === 'F'? 'active' : ""} onClick={() => setTemp('F')}>
                                  °F
                              </span>
                            </div>
                            <p className={'weather__description'}>{weather.weather[0].description}</p>
                        </div>

                        <p className={'weather__time'}>{toDate(Date.now())}</p>

                        <p className={'weather__humidity'}>Влажнасть :<span className='weather__humidity-count'> {weather.main.humidity} %</span>
                        </p>

                        <button className='weather__5day' onClick={getWeatherForFiveDay}> Получить погоды на 5 дней</button>
                    </>
                }
            </div>

        </section>
    );
};

export default CurrentDay;