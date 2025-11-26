'use client'

import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const getLinkClass = (path) => {
    return pathname === path ? 'text-blue-700 font-bold' : '';
  };

  return (
    <nav className="bg-emerald-200 text-black shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className='text-blue-700'><img src="/Assets/Hospital.png" alt="" className="w-22 h-12"/></Link>
        </div>

        <button
          type="button"
          className="lg:hidden btn btn-ghost"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-6 absolute lg:static top-16 right-0 rounded-b-2xl  w-42 lg:w-auto font-bold bg-emerald-200 lg:bg-transparent transition-all duration-300 ${open ? "block" : "hidden lg:flex"} p-4 lg:p-0`}>
          <Link href="/" className={`${getLinkClass('/')} hover:underline `}>Home</Link>
          <Link href="/Services" className={`${getLinkClass('/Services')} hover:underline `}>Services</Link>
          <Link href="/Doctors" className={`${getLinkClass('/Doctors')} hover:underline `}>Doctors</Link>
          <Link href="/About" className={`${getLinkClass('/About')} hover:underline `}>About</Link>
          <Link href="/Dashboard" className={`${getLinkClass('/Dashboard')} hover:underline `}>Dashboard</Link>

          {!user ? (
            <Link href="/Login" className={`${getLinkClass('/Login')} hover:underline `}>Login</Link>
          ) : (
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <Link href="/Profile">
                <img
                  src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'; }}
                  className="h-10 w-10 rounded-full border-2 border-emerald-700"
                  alt="User"
                />
              </Link>
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
