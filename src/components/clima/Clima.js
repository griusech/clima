import React from 'react';
import Pronostico from '../pronostico/Pronostico';
import Form from '../form/Form';
import useFetch from '../hook/useFetch';

const Clima = () => {

  const { 
    saveResult, 
    city, 
    setSearch, 
    search, 
    setConsult, 
    setError, 
    error 
  } = useFetch()

  return (
    <div className="container m-auto">
      <div className="text-center">
        <div className="m-auto">
          <Form
            search={search}
            setSearch={setSearch}
            setConsult={setConsult}
            setError={setError}
            error={error}
          />
        </div>
        <div>
          <Pronostico
            title={city}
            result={saveResult}
          />
        </div>
      </div>
    </div>
  );
}

export default Clima;