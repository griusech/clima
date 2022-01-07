import React, {useState} from 'react';

const Form = ({ search, setSearch, setConsult }) => {

    const [error, setError] = useState(false)
    const { ciudad } = search;

    const handleCity = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (ciudad.trim() === '')
        {
            setError(true);
            return;
        }
        setError(false);
        setConsult(true)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="input-field col s12">
                <select
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleCity}
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Villa Maria">Villa Maria</option>

                </select>

                <label htmlFor="pais">Ciudad: </label>
            </div>

            <div className="input-field col s12">
                <button
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block orange lighten-2 col s12"
                >Buscar Clima</button>
            </div>

        </form>
     );
}

export default Form;
