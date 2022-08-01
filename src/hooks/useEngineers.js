import { useEffect, useState } from "react"

const useEngineers = () =>{
    const [engineers, setEngineers] = useState([]);
    useEffect( () =>{
        fetch('https://neighbour-home--server.herokuapp.com/engineer')
        .then(res => res.json())
        .then(data => setEngineers(data));
        
    },[engineers, setEngineers]);
    return [engineers, setEngineers];
}
export default useEngineers;