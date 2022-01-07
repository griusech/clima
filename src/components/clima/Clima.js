import React, { useState, useEffect } from 'react';

import Pronostico from '../pronostico/Pronostico';
import Navbar from '../navbar/Navbar';
import Form from '../form/Form';

const Clima = () => {

  const [search, setSearch] = useState({
    ciudad: ''
  });

  const [consult, setConsult] = useState(false)
  const [saveResult, setSaveResult] = useState({})
  const [city, setCity] = useState({})
  const [error, setError] = useState(false)

  const { ciudad } = search;

  useEffect(() => {
    const fetchAPI = async () => {

      if (consult) {
        const appId = '343a1277dda37f6b5660f0f4939d089d';

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${appId}`;

        const fetching = await fetch(url);
        const result = await fetching.json();

        const groupdResult = result.list.reduce((prev, cur) => {
          const currentDate = cur.dt_txt.substring(0, 10);

          if (!prev[currentDate]) {
            prev[currentDate] = [];
          }

          prev[currentDate].push(cur);
          return prev;
        }, {})

        setSaveResult(groupdResult)
        setCity(result)
        setConsult(false)

        result.cod === "404" ? setError(true) : setError(false)
      }

    }
    fetchAPI();
    //eslint-disable-next-line
  }, [consult])

  return (
    <>
      <Navbar title="Clima" />

      <div className="container m-auto">
        <div className="text-center">
          <div>
            ACA PONGO CLIMA DE CIUDAD LOCAL
          </div>
            <div className="m-auto">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="">
              <Pronostico
                title={city}
                result={saveResult}
              />
            </div>
        </div>
      </div>

    </>
  );
}

export default Clima;