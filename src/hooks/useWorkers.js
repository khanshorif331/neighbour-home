import { useEffect, useState } from "react"

const useWorkers = () => {
    const [workers, setWorkers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://neighbour-home--server.herokuapp.com/getUserByRole/Worker')
            .then(res => res.json())
            .then(data => {
                setWorkers(data)
                setLoading(false)
            });

    }, [workers, loading, setWorkers]);
    return [workers, setWorkers];
}
export default useWorkers;