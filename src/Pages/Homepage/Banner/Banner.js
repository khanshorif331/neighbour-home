import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
	return (
		<div className='bg-gray-100'>
			<section
				className='cover bg-blue-teal-gradient text-center sm:text-left relative bg-teal-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden sm:py-48 flex
          items-end sm:items-center h-[550px]  sm:pb-40 pb-16  sm:min-h-screen'
			>
				<div className='h-full absolute top-0 left-0 right-0 z-0'>
					<img
						src='https://bangladeshpost.net/webroot/uploads/featureimage/2019-12/5df111b34395a.jpg'
						alt=''
						className='w-full h-full object-cover opacity-20'
					/>
				</div>

				<div className='lg:w-3/4 xl:w-7/12 relative z-10 h-100 lg:mt-16'>
					<div>
						<h1 className='text-white text-3xl sm:text-4xl font-bold leading-tight'>
							Welcome to Building Contraction Innovative for a better
							Tomorrow
						</h1>
						<p className='text-blue-100 md:text-lg leading-snug mt-2 sm:px-0 px-5 sm:mt-4'>
							Building construction means any physical activity on the
							site involved in the erection of a structure, cladding,
							external finish, formwork, fixture, fitting of service
							installation
						</p>
						<a
							href='#'
							className='px-8 py-3 bg-teal-900 hover:bg-white hover:text-teal-900  transition text-white rounded inline-block mt-4 sm:mt-8 font-semibold'
						>
							Buy Apartment
						</a>
					</div>
				</div>
			</section>
		</div>
		// {/* <!-- end hero --> */}

		// <div style={{ backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: 'center' }} className='flex h-[500px] sm:h-[100vh] bg-[url("https://bangladeshpost.net/webroot/uploads/featureimage/2019-12/5df111b34395a.jpg")] items-center '>
		//      <div className='text-white  h-full px-10 sm:px-40 flex items-center bg-gradient-to-b from-gray-500 to-gray-300 opacity-90'>
		//           <div className='sm:text-left text-center sm:w-8/12'>
		//                <h1 className="text-3xl sm:text-5xl
		//        font-bold capitalize">A Better life start with beutyfull smile</h1>
		//                <p className=' sm:text-lg font-semibold text-sm py-4'>Computer Village is one of the largest computer stores in Bangladesh offering bundle deals and discounted prices for the latest computer accessories</p>
		//                <button style={{ fontFamily: 'Open Sans, sans-serif', letterSpacing: '2px' }} className=' transition  bg-teal-900 font-medium px-6 sm:px-8 py-2 sm:py-2.5 rounded hover:bg-white hover:text-teal-900'>Book Builder</button>
		//           </div>
		//      </div>
		// </div>
	)
}

export default Banner
