'use client';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { auth, googleProvider } from '../Firebase/Firebase.config';

export default function Signup() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [show, setShow] = useState(true);
    const [error, setError] = useState('');
    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: name, photoURL });
            await auth.signOut();
            router.push('/Login');
            toast.success("Signup Successful");
        } catch (err) {
            console.log(err);
            setError('Signup failed. Try again.');
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            Cookies.set('token', result.user.uid, { expires: 1 });
            router.push('/Dashboard');
            toast.success("Signup Successful");
        } catch (err) {
            console.log(err);
            setError('Google login failed.');
        }
    };

    return (
        <div className='flex flex-col justify-center items-center flex-1 min-h-screen'>
            <div className='container mx-auto p-5'>
                <fieldset className="bg-emerald-100 rounded-lg w-full max-w-sm mx-auto p-6 shadow-md">
                    <h1 className='text-center font-bold text-emerald-800 text-2xl mb-4'>Sign Up</h1>

                    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                    <form onSubmit={handleSignup} className='flex flex-col gap-4'>
                        <input
                            type="text"
                            name='Name'
                            className="input bg-gray-100 text-black p-2 rounded"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            name='Email'
                            className="input bg-gray-100 text-black p-2 rounded"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            name='Photo'
                            className="input bg-gray-100 text-black p-2 rounded"
                            placeholder="Enter Photo URL"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                        <div className='relative'>
                            <input
                                type={show ? "password" : "text"}
                                name='Password'
                                className="input bg-gray-100 text-black p-2 rounded w-full"
                                placeholder={show ? "••••••••" : "Enter Password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-2 cursor-pointer text-lg"
                            >
                                {show ? "👁️" : "👀"}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="bg-emerald-400 hover:bg-emerald-600 text-black font-bold py-2 rounded"
                        >
                            Sign Up
                        </button>
                    </form>

                    <button
                        onClick={handleGoogleLogin}
                        className="bg-white font-bold w-full text-black border my-4 p-2 rounded flex items-center justify-center gap-2"
                    >
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                            </g>
                        </svg>
                        Continue with Google
                    </button>

                    <div className='text-center'>
                        <p className='text-black text-sm'>
                            Already Have An Account? Go to <Link href='/Login' className='font-bold text-blue-400'>Login</Link>
                        </p>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}