import React from 'react';
import './pronostico.css'

const Pronostico = ({ title, result }) => {

    const { city } = title;
    if (!city) return null;

    const kelvin = 273.15

    const getDays = date => {
        return [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
        ][new Date(date).getDay()]
    }

    const getResult = Object.keys(result).slice(0, 5)

    return (
        <div className="card-panel">
            <div className='mt-3'>
                <h2 className="city-name">{city.name}</h2>
            </div>
            <div className="card-container mt-5">
                {
                    getResult.map((res) => {
                        const { main, dt_txt, weather } = result[res][0];
                        const temMax = (parseInt(main.temp_max) - kelvin).toFixed(0)
                        
                        return (
                            <div className="card mb-3 borderCard border-2 m-1 d-flex" key={res}>
                                <div className="card-body">
                                    <div className="title-day">{getDays(dt_txt)}</div>
                                    <div>
                                        <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`} alt="iconos-clima" />
                                    </div>
                                    <div className="mt-3">
                                        <span>Temp:</span>
                                        <div className="temp">
                                            <div>{temMax}</div>
                                            <span>&#x2103;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Pronostico;