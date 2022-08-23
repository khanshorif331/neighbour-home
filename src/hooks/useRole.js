import axios from "axios";
import { useState } from "react";

const useRole = (user) => {
    const [role, setrole] = useState()
    const [roleLoading, setRoleLoading] = useState(true)
    // console.log(role);
    axios.get(`http://neighbour-home--server.herokuapp.com/singleUserByEmail/${user?.email}`)
        .then(data => {
            // console.log(data.data);
            setrole(data?.data?.role)
            setRoleLoading(false)
        })

    return  [role, roleLoading]
}
export default useRole;