import { useEffect, useState } from "react"

const useEngineer = (engineerId) =>{
    const [engineer, setEngineer] = useState({});
    useEffect( () =>{
        fetch(`https://neighbour-home--server.herokuapp.com/engineer/${engineerId}`)
        .then(res => res.json())
        .then(data => setEngineer(data));
        
    },[engineer, setEngineer]);
    return [engineer, setEngineer];
}
export default useEngineer;