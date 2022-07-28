import React from 'react'

const Constructor = ({ constructor, index }) => {
	console.log(constructor)
	return (
		<tr>
			<th>{index + 1}</th>
			<td>Cy Ganderton</td>
			<td>Quality Control Specialist</td>
			<td>Littel, Schaden and Vandervort</td>
			<td>Canada</td>
			<td>12/16/2020</td>
			<td>Blue</td>
		</tr>
	)
}

export default Constructor
