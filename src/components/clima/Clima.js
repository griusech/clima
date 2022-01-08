import React from 'react';

import Pronostico from '../pronostico/Pronostico';
import Navbar from '../navbar/Navbar';
import Form from '../form/Form';
import UseFetch from '../hook/UseFetch';

const Clima = () => {

  const { saveResult, city, setSearch, search, setConsult } = UseFetch()

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