import axios from "axios";
import { useEffect, useState } from "react";

const useRole = (user) => {
    const [role, setrole] = useState()
    const [roleLoading, setRoleLoading] = useState(false)
    // console.log(role);
    useEffect(() => {
        if (user) {
            setRoleLoading(true)
            axios.get(`http://neighbour-home--server.herokuapp.com/singleUserByEmail/${user?.email}`)
                .then(data => {
                    // console.log(data.data);
                    setrole(data?.data?.role)
                    setRoleLoading(false)
                })
        }

    }, [user]);

    return [role, roleLoading]
}
export default useRole;