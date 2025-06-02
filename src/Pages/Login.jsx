// import React, { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Login = () => {

    // const [close, setClose] = useState(false);

    // const toggleClose = () => {
    //     setClose(!close);
    // }

    return (
        <div className='bg-black/70 fixed top-0 left-0 w-full mx-auto h-screen flex items-center justify-center overflow-auto'>
            {/* <div>
                <button onClick={toggleClose}>
                    <IoMdCloseCircle className='h-5 w-5 md:h-6 md:w-6 text-blue-400 hover:text-blue-600' />
                </button>
            </div> */}
            {/* {close && */}
            {/* <div className='flex items-center justify-center'> */}
            <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col gap-4 bg-white text-gray-500 py-4 px-6 rounded-sm shadow-xl shadow-gray-400 border-2 border-blue-200'>
                <div className='text-center'>
                    <h1 className='text-2xl text-blue-400 font-semibold tracking-wide'>LOGIN</h1>
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
                <div className='flex items-center justify-between -mt-2'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" name="remember" id="" />
                        <span className='text-xs'>Remember me</span>
                    </div>
                    <div>
                        <Link className='text-xs hover:text-blue-400'>Forgot Password</Link>
                    </div>
                </div>

                <div className='flex items-center justify-center'>
                    <button className='w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-sm font-semibold shadow-md shadow-gray-400'>Login</button>
                </div>

                <div className='text-center text-sm flex items-center justify-center gap-2'>
                    <p>Don't have an account?</p>
                    <Link to="/register" className='hover:text-blue-400'>Register</Link>
                </div>
            </div>
            {/* </div> */}
            {/* } */}
        </div>
    )
}

export default Login;
