import React from 'react'

const Constructor = ({ constructor, index }) => {
	const { title, type, price, picture, duration, discount, assignment } =
		constructor
	console.log(constructor)
	return (
		<tr>
			<th>{index + 1}</th>
			<td>{title}</td>
			<td>{type}</td>
			<td>{price}</td>
			<td>{duration}</td>
			<td>{discount}</td>
			<td>{assignment}</td>
		</tr>
	)
}

export default Constructor
