'use client'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

const page = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='flex-1 flex flex-col items-center justify-center'>
      <div className='container mx-auto '>
        <div className="flex flex-col items-center justify-center bg-emerald-100 m-10 p-5 rounded-xl w-8/12 lg:w-4/12 mx-auto">
          <img
            src={user?.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU'}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9CKuBjYUddQREnoIMeN90lel-2hbn6OsnXS86_EQpiH6_MuVM9tV0i7UBVUpsiry_xw&usqp=CAU';
            }}
            alt="User Avatar"
            className="h-24 w-24 rounded-full border-4 border-emerald-400 shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.displayName || "Anonymous User"}
          </h2>
          <p className="text-blue-300 my-4">
            {user?.email || "No email available"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default page