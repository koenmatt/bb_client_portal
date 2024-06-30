
'use client';

import { useAppDispatch } from '@/store';
import { login, logout } from '@/store/authSlice';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

interface CreateResponse {
    token: string;
    id: string;
    username: string;
    name: string;
    valid: boolean;
}

const CreateAccountCard = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const [error, setError] = useState({ email: '', password: '', access_code: ''});

    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        
        event.preventDefault()
        const formData  = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const access_code = formData.get('access_code')
        let hasError = false;
        setError({ email: '', password: '', access_code: '' });

        if (!email) {
            setError(prev => ({ ...prev, email: '*You must include an email' }));
            hasError = true;
        }
        if (!password) {
            setError(prev => ({ ...prev, password: '*You must include a password' }));
            hasError = true;
        }
        if (!access_code) {
            setError(prev => ({ ...prev, access_code: '*You must include an access code' }));
            hasError = true;
        }

        if (!hasError && email) {

            const response = await fetch('/api/auth/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, access_code }),
              })
           
              if (response.ok) {
                dispatch(login(email.toString()))
                router.push('/dashboard')
              } else {
                    const body = await response.json()
                    alert(body.message)
              }

        }

    }


    return (
        <div className="bg-bbgray-900 -mt-2 rounded-lg pt-12 my-5 w-1/2 min-w-[350px] sm:min-w-[500px] mb-[200px] max-w-[600px]">
            {/* <div className="relative w-full h-16 overflow-hidden rounded-lg -mt-12">
                <img src="bb_art.jpg" className="absolute top-1/2 -translate-y-1/2 w-full"/>
            </div> */}
            <div className=" flex justify-center w-full h-full my-auto ">
                <div className="flex items-center justify-center w-full ">
                    <div className="flex items-center ">
                        <form onSubmit={handleLogin} className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                            <h3 className="mb-3 text-4xl font-MessinaSans text-white">Create Account</h3>
                            <p className="mb-4 text-bbgray-300 ">Enter your email, password, and access code.</p>
                            <div className="flex items-center mb-5">
                                <hr className="h-0 border-b border-solid border-bbgray-200 grow" /> 
                            </div>
                            <label htmlFor="email" className="mb-2 text-sm text-start text-white">Email*</label>
                            <input name='email' type="email" placeholder="matt@usebrainbase.xyz" className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-bbgray-100 bg-bbgray-500 text-white rounded-2xl"/>
                            {error.email && <p className="text-sm -mt-5 text-red-500 mb-2">{error.email}</p>}
                            <label htmlFor="password" className="mb-2 text-sm text-start text-white">Password*</label>
                            <input name="password" type="password" placeholder="Enter a password" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-bbgray-100 bg-bbgray-500 text-white rounded-2xl"/>
                            {error.password && <p className="text-sm -mt-2  text-red-500 mb-">{error.password}</p>}
                            <label htmlFor="password" className="mb-2 text-sm text-start text-white">Access Code*</label>
                            <input name="access_code" type="access_code" placeholder="Enter an access code" className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-bbgray-100 bg-bbgray-500 text-white rounded-2xl"/>
                            {error.access_code && <p className="text-sm -mt-2  text-red-500 mb-">{error.access_code}</p>}

                            <button type='submit' className="mt-5 w-full px-6 py-5 mb-5 text-md font-bold leading-none text-white transition duration-300 md:w-96 hover:bg-purple-blue-600 focus:ring-4 focus:ring-blue-100 rounded-md border border-gray-200 hover:bg-gray-100 hover:text-black">
                                Create Account
                            </button>
                            <p className="text-sm mb-10 leading-relaxed text-white">Already have an account? 
                                <a href="/" className="font-bold ml-2 text-bbgray-200">Log In</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateAccountCard