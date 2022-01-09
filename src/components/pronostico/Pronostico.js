import React from 'react';
import './pronostico.css'

const Pronostico = ({ title, result }) => {

    const { city } = title;
    if (!city) return null;

    const kelvin = 273.15

    const getDays = (param) => {
        const days = [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ];
        const numberDay = new Date(param).getDay();
        const nameDay = days[numberDay];
        return nameDay;
    }

    const getResult = Object.keys(result).slice(0, 5)

    return (
        <div className="card-panel">
            <div className='mt-3'>
                <h2 className="city-name">{city.name}</h2>
            </div>
            <div className="card-container mt-5">
                {
                    getResult.map((res) => (
                        <div className="card mb-3 borderCard border-2 m-1 d-flex" key={res}>
                            <div className="card-body">
                                <div className="title-day">{getDays(result[res][0].dt_txt)}</div>
                                <div>
                                    <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${result[res][0].weather[0].icon}.svg`}></img>
                                </div>
                                <div className="mt-3">
                                    <span>Temp:</span>
                                    <div className="temp">
                                        <div>{(parseInt(result[res][0].main.temp_max) - kelvin).toFixed(0)}</div>
                                        <span>&#x2103;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Pronostico;