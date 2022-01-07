import React from 'react';
import './pronostico.css'

const Pronostico = ({ title, result }) => {

    const { city } = title;
    if (!city) return null;
    
    const kelvin = 273.15
    
    return (
        <div className="card-panel">
            <div className='mt-3'>
                <h2>{city.name}</h2>
            </div>
            <div className="card-container mt-5">
                {
                    Object.keys(result).map((res) => (
                        <div className="card mb-3 border-info border-2 m-1 d-flex" key={res}>
                            <div className="card-body">
                                <div className="temp">
                                    <div>{(parseInt(result[res][0].main.temp) - kelvin).toFixed(0)}</div>
                                    <span>&#x2103;</span>
                                </div>
                                <div>
                                    <img src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${result[res][0].weather[0].icon}.svg`}></img>
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