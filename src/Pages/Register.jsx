import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-black/70 fixed top-0 left-0 w-full'>
            <div className='mx-auto h-screen flex items-center justify-center'>
                <div className='w-1/3 flex flex-col gap-6 bg-white text-gray-500 py-4 px-6 rounded-sm shadow-xl shadow-gray-400 border-2 border-blue-200'>
                    <div className='text-center'>
                        <h1 className='text-2xl text-blue-400 font-semibold tracking-wide'>REGISTER</h1>
                    </div>
                    <div className='py-2 px-4 rounded-sm shadow-sm shadow-blue-400'>
                        <input
                            type="text"
                            name="firstName"
                            id=""
                            placeholder='First Name'
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='py-2 px-4 rounded-sm shadow-sm shadow-blue-400'>
                        <input
                            type="text"
                            name="lastName"
                            id=""
                            placeholder='Last Name'
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='py-2 px-4 rounded-sm shadow-sm shadow-blue-400'>
                        <input
                            type="email"
                            name="email"
                            id=""
                            placeholder='Email'
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='py-2 px-4 rounded-sm shadow-sm shadow-blue-400'>
                        <input
                            type="password"
                            name="password"
                            id=""
                            placeholder='Password'
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='py-2 px-4 rounded-sm shadow-sm shadow-blue-400'>
                        <input
                            type="password"
                            name="confirmPassword"
                            id=""
                            placeholder='Retype Password'
                            className='w-full focus:outline-none'
                        />
                    </div>
                    <div className='flex items-start gap-2 -mt-2'>
                        <input type="checkbox" name="remember" id="" />
                        <span className='text-xs'>Remember me</span>
                    </div>

                    <div className='flex items-center justify-center'>
                        <button className='w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-sm font-semibold shadow-md shadow-gray-400'>Register</button>
                    </div>

                    <div className='text-center text-sm flex items-center justify-center gap-2'>
                        <p>Already have an account!</p>
                        <Link to="/login" className='hover:text-blue-400'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
