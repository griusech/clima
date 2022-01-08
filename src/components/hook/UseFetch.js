import { useEffect, useState } from 'react'

const UseFetch = () => {
    const [search, setSearch] = useState({
        ciudad: ''
    });

    const [consult, setConsult] = useState(false)
    const [change, setChange] = useState(false)
    const [saveResult, setSaveResult] = useState({})
    const [city, setCity] = useState({})
    const [error, setError] = useState(false)

    const { ciudad } = search;

    useEffect(() => {
        const fetchData = async () => {

            navigator.geolocation.getCurrentPosition(async (position) => {

                const appId = '343a1277dda37f6b5660f0f4939d089d';

                const url = change
                    ? `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${appId}`
                    : `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${appId}`

                const fetching = await fetch(url);
                const result = await fetching.json();

                const groupResult = result.list.reduce((prev, cur) => {
                    const currentDate = cur.dt_txt.substring(0, 10);

                    if (!prev[currentDate]) {
                        prev[currentDate] = [];
                    }

                    prev[currentDate].push(cur);
                    return prev;
                }, {})
                setSaveResult(groupResult)
                setCity(result)
                setConsult(false)
                setChange(true)

                result.cod === "404" ? setError(true) : setError(false)
            })

        }

        fetchData()
        //eslint-disable-next-line
    }, [consult, change])

    return {
        consult,
        saveResult,
        city,
        error,
        setSearch,
        search,
        setConsult
    }
}

export default UseFetch
