import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useEngineer from '../../hooks/useEngineer';
import { useForm } from 'react-hook-form';
const n = '01764 546296'
const num = n.toString().split(' ');
const EngineerDetails = () => {
    const { engineerId } = useParams();
    const [engineer] = useEngineer(engineerId);
    const { picture, name, _id, surname } = engineer;
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const onSubmit = data => {
        const result = {
            data: data,
            engineer: engineer
        }
        if (result) {
            const url = `https://neighbour-home--server.herokuapp.com/booking`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(result)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.message) {
                        alert('your order is successfully done we will contact you later');
                        reset();
                        navigate('/dashboard/myOrders');
                    }
                    else {
                        alert('try another');
                        reset();
                    }
                })
        }

    }
    return (
        <div className='mt-32'>
            <div className="hero min-h-screen bg-base-200 py-12">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <div className="card-body">
                        <img className='w-72 h-72 hidden  lg:block rounded-xl' src={picture} alt={picture} />
                        <input type="text" name='eName' disabled value={name || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled value={surname || ''} className="input input-bordered w-full max-w-xs" />
                        <img className='lg:hidden w-80 h-48 rounded-xl' src={picture} alt={picture} />
                    </div>
                    <div className="mt-8 pr-4">
                        <h1 className="text-sm font-bold">Engineer ID: {_id}</h1>
                        <p className="w-6/12 my-1">Phone: {1 < 0 ? '**********' : ['*****', num[1]]}</p>
                        <p className="w-6/12 my-1">Email: {1 < 0 ? '*******@**.com' : 'xyz****@**.com'}</p>
                        <p className="w-6/12 my-1">Location: 'Dhaka mohakali'</p>
                        <p className="w-6/12 my-1">per hours: ${Math.floor(Math.random() * 10) + 20}</p>
                        <input type="text"   value={user?.displayName} className="input input-bordered w-full max-w-xs"  {...register("customerName")} />
                        <input type="email"  value={user?.email} className="input my-2 input-bordered w-full max-w-xs" {...register("customerEmail")} />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("customerAddress", {
                                        required: {
                                            value: true,
                                            message: 'Address is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address?.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input py-1 input-bordered w-full max-w-xs"
                                    {...register("customerPhone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone?.message}</span>}
                                </label>
                            </div>

                            <input type="submit" className="btn btn-primary rounded w-6/12 font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary mb-4" value="connect with me"></input>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineerDetails;
