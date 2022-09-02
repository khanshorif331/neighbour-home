import axios from 'axios'
import { useEffect, useState } from 'react'

const useRole = (user) => {
	const [role, setrole] = useState("")
	const [roleLoading, setRoleLoading] = useState(true)
	// console.log(role);
	useEffect(() => {
		if (user) {
			axios
				.get(
					`https://neighbour-home--server.herokuapp.com/singleUserByEmail/${user?.email}`
				)
				.then(data => {
					// console.log(data.data);
					setrole(data?.data?.role)
					setRoleLoading(false)
				})
		}
		else{
			setRoleLoading(true)
		}

	}, [user])

	return [role, roleLoading]
}
export default useRole;
