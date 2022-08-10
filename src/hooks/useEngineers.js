import { useEffect, useState } from "react"

const useEngineers = () => {
    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        fetch('https://neighbour-home--server.herokuapp.com/engineer')
            .then(res => res.json())
            .then(data => setEngineers(data));

    }, [engineers, setEngineers]);
    return [engineers, setEngineers];
}
export default useEngineers;


// const useEngineers = () =>{
//     const [engineers, setEngineers] = useState([]);
//     const [user, setUser] = useState();
//     useEffect( () =>{
//     fetch('https://neighbour-home--server.herokuapp.com/user').then(
//         res => res.json()
//     ).then(data => setUser(data))
//     // console.log(user && user);
//     {
//         const engineers = user?.filter(engineer => engineer.role === "Engineer");
//         // console.log(engineers && engineers);
//         setEngineers(engineers)
//     }
//     },[engineers, user, setUser, setEngineers]);

    
//     return [engineers, setEngineers];
// }
// export default useEngineers;





































// const useEngineers = () =>{
    // const [engineers, setEngineers] = useState([]);
    // const [workers, setWorkers] = useState([]);
    // const [admin, setAdmin] = useState([]);
    // const [guestUser, setGuestUser] = useState([]);
    // const [user, setUser] = useState();
    // useEffect( () =>{
    // fetch('https://neighbour-home--server.herokuapp.com/user').then(
    //     res => res.json()
    // ).then(data => setUser(data))
    // // console.log(user && user);
    // {
    //     const engineers = user?.filter(u => u.role === "Engineer");
    //     // console.log(engineers && engineers);
    //     setEngineers(engineers)
    // }
    // {
    //     const workers = user?.filter(u => u.role === "Workers");
    //     // console.log(engineers && engineers);
    //     setWorkers(workers)
    // }
    // {
    //     const admin = user?.filter(u => u.role === "Admin");
    //     // console.log(engineers && engineers);
    //     setAdmin(admin)
    // }
    // {
    //     const guestUser = user?.filter(u => u.role === "GuestUser");
    //     // console.log(engineers && engineers);
    //     setGuestUser(guestUser)
    // }
    // },[engineers, user, setUser, setEngineers]);

    
//     return [engineers, setEngineers];
// }
// export default useEngineers;