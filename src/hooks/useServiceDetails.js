import { useEffect, useState } from "react";

const useServiceDetails = (serviceId) =>{
    const [service, setService] = useState({});
    useEffect( () =>{
        const url = `https://neighbour-home--server.herokuapp.com/constructor/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));    
    }, [service, serviceId]);
    return [service, setService]
}

export default useServiceDetails;