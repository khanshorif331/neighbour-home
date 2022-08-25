import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { BsBehance, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';

const BookingDetails = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    console.log(id);
    const { isLoading, error, data, refetch } = useQuery(['booking'], () =>
    
    fetch(`https://neighbour-home--server.herokuapp.com/booking/${id}`).then(
        res => res.json() 
    )
);


if (isLoading) return <Loading></Loading>
if (error) return 'An error has occurred: ' + error.message
const { customerEmail, customerPhone, customerName, customerAddress } =data?.data;
  const { name, email, _id, picture, phone } = data?.engineer;
    return (
        <div className='lg:px-2 px-8 py-6 pb-32 h-full'>

            <div className="text-5xl text-accent pb-2 text-center">Booking Details</div>
            <div className="card rounded-none  bg-white shadow-xl">
            <div className='bg-gray-200'>
                <div className="text-3xl text-accent font-semibold py-2 pl-2 border-b-2 border-gray-300">Engineer Info</div> <hr />
                <div className='flex justify-between'>
                <div className="flex flex-col ml-4">
                    <p className='text-2xl font-bold pl-4 pt-4'>{name}</p>
                <ul className="social-icons">
                    <li>
                      <a href="/">
                        <BsFacebook className='text-xs' />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <BsBehance />
                      </a>
                    </li>
                  </ul>
                </div>
                <figure><img className='w-40 h-40 text-left inline-block  p-4' src={picture} alt="Nayeem Hasan" /></figure>
                </div>
            </div>
                <div className='card lg:card-side'>
                <div className="card-body">
                    <div className="text-xl  text-neutral">Name: <span className='font-semibold'>{name}</span></div>
                    <div className="text-xl  text-neutral">Date of birth: <span className='font-semibold'>16 Sep 2001</span></div>
                    <div className="text-xl  text-neutral">Nationality: <span className='font-semibold'>Bangladeshsi</span></div>
                    <div className="text-xl  text-neutral block">Location: <span className='font-semibold'>Osmaninagar, Sylhet, BD</span></div>
                    <div className="text-xl  text-neutral block"><small>Email: <span className='font-semibold'>{name.toLowerCase().split(' ')}@gmail.com</span></small></div>
                    <div className="text-xl  text-neutral"><small>Phone: <span className='font-semibold'>+880176454629</span></small></div>
                    <div className="text-xl  text-neutral"><small>Linkedin: <span className='font-semibold'>/{name.toLowerCase().split(' ')}</span></small></div>
                    <div className="text-xl  text-neutral"><small>Github: <span className='font-semibold'>/{name.toLowerCase().split(' ')}</span></small></div>
                </div>
                
                <div className="card-body">
                    <div className="text-2xl text-accent font-bold">SKILL</div>
                    <div className="text-xl  text-neutral"><i><span className='font-semibold'>...</span></i></div>
                    <div className="text-2xl text-accent font-bold uppercase">my previous PROJECTS</div>
                    <div className="text-xl  text-neutral">Autostars: <a className='text-primary' target="_blank" href='https://autostars.netlify.app'>https://autostars.netlify.app</a></div>
                    <div className="text-xl  text-neutral">Travelu: <a className='text-primary' target="_blank" href='https://traveluu.netlify.app'>https://traveluu.netlify.app</a></div>
                    <div className="text-xl  text-neutral">GamesReview: <a className='text-primary' target="_blank" href='https://gamesreview.netlify.app'>https://gamesreview.netlify.app/</a></div>
                </div>
                </div>
            <div className='mx-4'>
                <div className="text-3xl border-b-2 border-gray-600 text-accent font-semibold py-2 pl-2">My Info</div>
                <figure><img className='w-40 h-40 text-left block mr-auto p-4' src={user?.photoURL} alt="Nayeem Hasan" /></figure>
            </div>
                <div className='card lg:card-side'>
                <div className="card-body">
                    <div className="text-xl  text-neutral">Name: <span className='font-semibold'>{customerName}</span></div>
                    <div className="text-xl  text-neutral">Date of birth: <span className='font-semibold'>16 Sep 2001</span></div>
                    <div className="text-xl  text-neutral">Nationality: <span className='font-semibold'>Bangladeshsi</span></div>
                    <div className="text-xl  text-neutral block">Location: <span className='font-semibold'>{customerAddress}</span></div>
                    <div className="text-xl  text-neutral block"><small>Email: <span className='font-semibold'>{customerEmail}</span></small></div>
                    <div className="text-xl  text-neutral"><small>Phone: <span className='font-semibold'>+8801764546296</span></small></div>
                    <div className="text-xl  text-neutral"><small>Linkedin: <span className='font-semibold'>/{customerName.toLowerCase().split(' ')}</span></small></div>
                    <div className="text-xl  text-neutral"><small>Github: <span className='font-semibold'>/{customerName.toLowerCase().split(' ')}</span></small></div>
                </div>
                
                <div className="card-body">
                    <div className="text-2xl text-accent font-bold">ADDITIONAL INFO</div>
                    <div className="text-xl  text-neutral"><i><span className='font-semibold'>.............</span></i></div>
                    <Link to={`/user_data`}><button className='btn btn-md text-end btn-error mt-auto'>update your info</button></Link>
                </div>
                </div>
            </div>
            {/* <div>
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-2">
                        <div className=''>
                            <div className="text-3xl text-accent font-semibold py-2 pl-2">My Info</div> <hr />
                            <figure><img className='w-40 h-40 text-left block ml-auto' src="#" alt="Nayeem Hasan" /></figure>
                        </div>
                    </div>
                    <div class="...">
                        <div className="card-body">
                            <div className="text-xl  text-neutral">Name: <span className='font-semibold'>Nayeem Hasan</span></div>
                            <div className="text-xl  text-neutral">Date of birth: <span className='font-semibold'>16 Sep 2001</span></div>
                            <div className="text-xl  text-neutral">Nationality: <span className='font-semibold'>Bangladeshsi</span></div>
                            <div className="text-xl  text-neutral block">Location: <span className='font-semibold'>Osmaninagar, Sylhet, BD</span></div>
                            <div className="text-xl  text-neutral block"><small>Email: <span className='font-semibold'>hasannayeeem@gmail.com</span></small></div>
                            <div className="text-xl  text-neutral"><small>Phone: <span className='font-semibold'>+8801764546296</span></small></div>
                            <div className="text-xl  text-neutral"><small>Linkedin: <span className='font-semibold'>/hasannayeeem</span></small></div>
                            <div className="text-xl  text-neutral"><small>Github: <span className='font-semibold'>/hasannayeeem</span></small></div>
                        </div>
                    </div>
                    <div class="...">
                        <div className="card-body">
                            <div className="text-2xl text-accent font-bold">SKILL</div>
                            <div className="text-xl  text-neutral"><i><span className='font-semibold'>ReactJS, Nodejs(express), Mongodb, Firebase(authentication), Bootstrap, <br /> tailwind,
                                DaisyUI, CSS, Html </span></i></div>
                            <div className="text-2xl text-accent font-bold">PROJECTS</div>
                            <div className="text-xl  text-neutral">Autostars: <a className='text-primary' target="_blank" href='https://autostars.netlify.app'>https://autostars.netlify.app</a></div>
                            <div className="text-xl  text-neutral">Travelu: <a className='text-primary' target="_blank" href='https://traveluu.netlify.app'>https://traveluu.netlify.app</a></div>
                            <div className="text-xl  text-neutral">GamesReview: <a className='text-primary' target="_blank" href='https://gamesreview.netlify.app'>https://gamesreview.netlify.app/</a></div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div className=''>
                            <div className="text-3xl text-accent font-semibold py-2 pl-2">Engineer Info</div> <hr />
                            <figure><img className='w-40 h-40 text-left block ml-auto' src="#" alt="Nayeem Hasan" /></figure>
                        </div>
                    </div>
                    <div class="...">
                        <div className="card-body">
                            <div className="text-xl  text-neutral">Name: <span className='font-semibold'>Nayeem Hasan</span></div>
                            <div className="text-xl  text-neutral">Date of birth: <span className='font-semibold'>16 Sep 2001</span></div>
                            <div className="text-xl  text-neutral">Nationality: <span className='font-semibold'>Bangladeshsi</span></div>
                            <div className="text-xl  text-neutral block">Location: <span className='font-semibold'>Osmaninagar, Sylhet, BD</span></div>
                            <div className="text-xl  text-neutral block"><small>Email: <span className='font-semibold'>hasannayeeem@gmail.com</span></small></div>
                            <div className="text-xl  text-neutral"><small>Phone: <span className='font-semibold'>+8801764546296</span></small></div>
                            <div className="text-xl  text-neutral"><small>Linkedin: <span className='font-semibold'>/hasannayeeem</span></small></div>
                            <div className="text-xl  text-neutral"><small>Github: <span className='font-semibold'>/hasannayeeem</span></small></div>
                        </div>
                    </div>
                    <div class="...">
                        <div className="card-body">
                            <div className="text-2xl text-accent font-bold">SKILL</div>
                            <div className="text-xl  text-neutral"><i><span className='font-semibold'>ReactJS, Nodejs(express), Mongodb, Firebase(authentication), Bootstrap, <br /> tailwind,
                                DaisyUI, CSS, Html </span></i></div>
                            <div className="text-2xl text-accent font-bold">PROJECTS</div>
                            <div className="text-xl  text-neutral">Autostars: <a className='text-primary' target="_blank" href='https://autostars.netlify.app'>https://autostars.netlify.app</a></div>
                            <div className="text-xl  text-neutral">Travelu: <a className='text-primary' target="_blank" href='https://traveluu.netlify.app'>https://traveluu.netlify.app</a></div>
                            <div className="text-xl  text-neutral">GamesReview: <a className='text-primary' target="_blank" href='https://gamesreview.netlify.app'>https://gamesreview.netlify.app/</a></div>
                        </div>
                    </div>
                    <div class="col-span-2 ...">
                        <button>delete</button>
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default BookingDetails;