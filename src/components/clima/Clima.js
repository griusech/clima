import React from 'react';
import Pronostico from '../pronostico/Pronostico';
import Form from '../form/Form';
import UseFetch from '../hook/UseFetch';

const Clima = () => {

  const { saveResult, city, setSearch, search, setConsult } = UseFetch()

  return (
    <div className="container m-auto">
      <div className="text-center">
        <div className="m-auto">
          <Form
            search={search}
            setSearch={setSearch}
            setConsult={setConsult}
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