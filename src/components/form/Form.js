import React from 'react';
import './form.css'

const Form = ({ search, setSearch, setConsult, setError, error }) => {

    const { ciudad } = search;

    const handleCity = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '') return setError(true);
        setError(false);
        setConsult(true)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="w-50 m-auto">
                <label className="city-search" htmlFor="ciudad">Consultá por otra ciudad</label>
                <select
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleCity}
                    className="form-select"
                >
                    <option value="">-- Seleccione una ciudad --</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Villa Maria">Villa Maria</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Bariloche">Bariloche</option>
                </select>
                {error && 
                    <div className="error-select mt-3">
                        Debe seleccionar una ciudad
                    </div>
                }
            </div>

            <div>
                <button
                    type="submit"
                    value="Buscar Clima"
                    className="btn btn-info mt-3 text-white"
                >
                    Consultar
                </button>
            </div>
        </form>
     );
}

export default Form;
