import { useEffect, useState } from "react"

const useAuthEngineer = user => {
    const [authEngineer, setAuthEngineer] =useState(false);
    const [engineerLoading, setEngineerLoading] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if(email){
            fetch(`https://neighbour-home--server.herokuapp.com/authEngineer/${email}`, {
                method: 'GET',
                headers:{
                    'content-type': 'application/json',
                    // authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
            .then(res => res.json())
            .then(data => {
                setAuthEngineer(data.authEngineer);
                setEngineerLoading(false);
            })
        }
    },[user])
    return [authEngineer, engineerLoading];
}

export default useAuthEngineer;