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

        if (ciudad.trim() === '') return setError(true);
        setError(false);
        setConsult(true)
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="w-50 m-auto">
                <label htmlFor="pais">Consultá por otra ciudad</label>
                {error && <div>Debe seleccionar una ciudad</div>}
                <select
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleCity}
                    className="form-select"
                >
                    <option value="">-- Seleccionar --</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Catamarca">Catamarca</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Villa Maria">Villa Maria</option>

                </select>
            </div>

            <div>
                <button
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block orange lighten-2 col s12"
                >Buscar</button>
            </div>

        </form>
     );
}

export default Form;
