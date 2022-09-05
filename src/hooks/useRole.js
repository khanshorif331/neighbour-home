import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import Loading from '../Shared/Loading/Loading'

const useRole = (e) => {
	const [role, setrole] = useState("")
	const [roleLoading, setRoleLoading] = useState(true)
	let [user, loading] = useAuthState(auth);
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
		else {
			setRoleLoading(true)
		}

	}, [user])

	return [role, roleLoading]
}
export default useRole;
