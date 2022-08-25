import { useEffect, useState } from "react"

const useWorker = (workerId) =>{
    const [worker, setWorker] = useState({});
    useEffect( () =>{
        fetch(`https://neighbour-home--server.herokuapp.com/user/${workerId}`)
        .then(res => res.json())
        .then(data => setWorker(data));
        
    },[worker, workerId, setWorker]);
    return [worker, setWorker];
}
export default useWorker;