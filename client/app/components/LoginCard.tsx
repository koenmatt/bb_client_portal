
'use client';

import { useAppDispatch } from '@/store';
import { setAuthState } from '@/store/authSlice';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginCard = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();

    const login = (e: { preventDefault: () => void; }) => {
        
        e.preventDefault()
        dispatch(setAuthState(true));
        
        router.push('/dashboard');
    }


    return (
        <div className="bg-bbgray-900 -mt-2 rounded-lg pt-12 my-5 w-1/2 min-w-[350px] sm:min-w-[500px] mb-[200px] max-w-[600px]">
            {/* <div className="relative w-full h-16 overflow-hidden rounded-lg -mt-12">
                <img src="bb_art.jpg" className="absolute top-1/2 -translate-y-1/2 w-full"/>
            </div> */}
            <div className=" flex justify-center w-full h-full my-auto ">
                <div className="flex items-center justify-center w-full ">
                    <div className="flex items-center ">
                        <form onSubmit={login} className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                            <h3 className="mb-3 text-4xl font-MessinaSans text-white">Sign In</h3>
                            <p className="mb-4 text-bbgray-300 ">Enter your email and password</p>
                            <div className="flex items-center mb-5">
                                <hr className="h-0 border-b border-solid border-bbgray-200 grow" /> 
                            </div>
                            <label htmlFor="email" className="mb-2 text-sm text-start text-white">Email*</label>
                            <input id="email" type="email" placeholder="matt@usebrainbase.xyz" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-bbgray-100 bg-bbgray-500 text-dark-grey-900 rounded-2xl"/>
                            <label htmlFor="password" className="mb-2 text-sm text-start text-white">Password*</label>
                            <input id="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-bbgray-100 bg-bbgray-500 text-white rounded-2xl"/>
                                <button type='submit' className="w-full px-6 py-5 mb-5 text-md font-bold leading-none text-white transition duration-300 md:w-96 hover:bg-purple-blue-600 focus:ring-4 focus:ring-blue-100 rounded-md border border-gray-200 hover:bg-gray-100 hover:text-black">
                                    Sign In
                                </button>
                            <p className="text-sm mb-10 leading-relaxed text-white">Not registered yet? 
                                <a href="/create" className="font-bold ml-2 text-bbgray-200">Create an Account</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginCard