import React from 'react';
import { useParams } from 'react-router-dom';

const BookingDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className='lg:px-2 px-8 py-6 pb-32'>
            <div className="text-5xl text-accent pb-2 text-center">Booking Details</div>
            <div className='bg-gray-200'>
                <div className="text-3xl text-accent font-semibold py-2 pl-2">Engineer Info</div> <hr />
                <figure><img className='w-40 h-40 text-left block ml-auto' src="#" alt="Nayeem Hasan" /></figure>
            </div>
            <div className="card rounded-none lg:card-side bg-white shadow-xl">

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
            <div>
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

            </div>
        </div>
    );
};

export default BookingDetails;