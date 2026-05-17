'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";
import Cookies from 'js-cookie';
import { auth, googleProvider } from '../Firebase/Firebase.config';
import Link from 'next/link';

export default function LoginContent() {

  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        Cookies.set('tokenM', user.uid, { expires: 1 });
      } else {
        Cookies.remove('tokenM');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(next || '/Dashboard');
    } catch {
      setError('Invalid email or password.');
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      router.push(next || '/Dashboard');
    } catch {
      setError('Google login failed.');
    }
  };

  const handleForgetPassword = async () => {
    if (!email) return setError('Please enter your email first.');
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent!');
    } catch (err) {
      setError('Failed to send reset email.');
    }
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4'>
      <div className='w-full max-w-sm bg-emerald-100 p-6 rounded-lg shadow-md'>
        <h1 className='text-center font-bold text-emerald-800 text-2xl mb-5'>Login</h1>

        {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

        <form onSubmit={handleEmailLogin} className='flex flex-col gap-4'>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="input bg-gray-100 text-black p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='relative'>
            <input
              type={show ? "password" : "text"}
              placeholder={show ? "••••••••" : "Enter Password"}
              className="input bg-gray-100 text-black p-2 rounded w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2 cursor-pointer text-lg"
            >
              {show ? "👁️" : "👀"}
            </span>
          </div>

          <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 rounded">
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="bg-white border text-black p-2 w-full mt-4 rounded flex items-center justify-center gap-2 shadow-sm hover:bg-gray-200"
        >
          Continue with Google
        </button>

        <div className='flex flex-col gap-2 pt-4 text-center'>
          <button
            onClick={handleForgetPassword}
            className='text-black hover:underline text-sm'
          >
            Forget Password
          </button>
          <p className='text-sm text-black'>
            Don’t have an account?
            <Link href="/Signup" className='text-blue-500 font-semibold ml-1'>Sign Up</Link>
          </p>
        </div>

      </div>
    </div>
  );
}