import React, { useContext, useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../../App'

const Guides = () => {
	const [darkMode, setDarkMode] = useContext(DarkModeContext)
	const [books, setBooks] = useState([])
	useEffect(() => {
		fetch('https://neighbour-home-backend.onrender.com/book')
			.then(res => res.json())
			.then(data => setBooks(data))
	}, [])
	return (
		<div className="mt-32">
			<h2
				style={{ fontFamily: "'Rajdhani', sans-serif" }}
				className="uppercase text-3xl font-bold text-center py-3"
			>
				Learn more about Construction
			</h2>
			<div className="flex justify-center">
				<div className=" rounded-md w-32 h-1 bg-[#0D9488]"></div>
				<div className=" rounded-md w-4 h-1 mx-2 bg-[#0D9488]"></div>
				<div className=" rounded-md w-2 h-1 bg-[#0D9488]"></div>
			</div>
			{books.map(book => {
				const { picture, name, description, _id } = book
				return (
					<div className="flex items-center flex-col sm:flex-row sm:px-28 py-10">
						<Fade right duration={1500}>
							<div className="w-full sm:w-5/12">
								<img className="w-6/12 mx-auto" src={picture} alt="" />
							</div>
						</Fade>
						<Fade left duration={1500}>
							<div className="w-10/12 sm:w-7/12 text-center sm:text-left">
								<p
									style={{
										color: `${darkMode ? '#297bbe' : '#0e416c'}`,
									}}
									className="font-semibold"
								>
									{name}
								</p>
								<p
									className={`${
										darkMode ? 'text-white' : 'text-gray-500'
									}`}
								>
									{description.slice(0, 200)}
								</p>
								{/* <button
                  className={`${
                    darkMode
                      ? "hover:bg-white bg-teal-900 text-white border border-teal-900 hover:text-teal-900"
                      : "bg-teal-800 border border-teal-900 text-white hover:bg-white hover:text-teal-900 "
                  } sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase `}
                >
                  Download
                </button> */}
								<Link to={`/bookDetail/${_id}`}>
									<button
										className={`${
											darkMode
												? 'hover:bg-white bg-teal-900 text-white border border-teal-900 hover:text-teal-900'
												: 'bg-teal-800 border border-teal-900 text-white hover:bg-white hover:text-teal-900 '
										} sm:px-7 px-5 transition py-1.5 sm:py-2.5 rounded-[3px] mt-5 uppercase `}
									>
										Details
									</button>
								</Link>
							</div>
						</Fade>
					</div>
				)
			})}
		</div>
	)
}

export default Guides
