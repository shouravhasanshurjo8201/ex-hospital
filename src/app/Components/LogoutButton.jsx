'use client'
import { signOut } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { auth } from "../Firebase/Firebase.config";

export default function LogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
        await signOut(auth);
        router.push('/Login');
    };

    return (
        <button onClick={handleLogout} className="bg-emerald-400 hover:bg-emerald-600 text-white py-2 px-4 rounded">
            Logout
        </button>
    );
}
