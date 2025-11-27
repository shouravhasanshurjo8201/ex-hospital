'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/app/Firebase/Firebase.config';
import Link from 'next/link';
import AppointmentForm from '@/app/Components/AppointmentForm';

export default function DoctorDetailsClient() {
  const params = useParams();
  const id = parseInt(params.id);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Rahman",
    specialty: "Cardiologist",
    image: "https://i.postimg.cc/j5Kjz6nX/shouravhasan1.png",
    experience: "10+ Years",
    fees: "800 – 1500 BDT",
    schedule: "Sun–Thu (10 AM - 5 PM)",
    about: "Expert in heart diseases, ECG analysis, chest pain & cardio-vascular treatment.",
    qualifications: ["MBBS", "FCPS (Cardiology)", "MD (Heart)"],
    services: ["ECG Check", "Heart Consultation", "Cardio Risk Analysis"],
  },
  {
    id: 2,
    name: "Dr. Mahmud Hasan",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    experience: "12+ Years",
    fees: "1200 – 1800 BDT",
    schedule: "Sat–Wed (11 AM - 6 PM)",
    about: "Specialist in migraine, epilepsy, nerve pain and neurological disorders.",
    qualifications: ["MBBS", "MD (Neurology)"],
    services: ["Nerve Test", "Migraine Treatment", "Brain Checkup"],
  },
  {
    id: 3,
    name: "Dr. Tania Akter",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    experience: "8+ Years",
    fees: "700 – 1200 BDT",
    schedule: "Mon–Fri (9 AM - 3 PM)",
    about: "Skin, acne, eczema, pigmentation & hair fall treatment specialist.",
    qualifications: ["MBBS", "DDV (Skin)"],
    services: ["Acne Treatment", "Skin Infection Care", "Hair Fall Check"],
  },
  {
    id: 4,
    name: "Dr. Imran Abdullah",
    specialty: "Orthopedic Specialist",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    experience: "15+ Years",
    fees: "900 – 1600 BDT",
    schedule: "Sun–Thu (10 AM - 4 PM)",
    about: "Treats bone fracture, joint pain, arthritis & muscle injuries.",
    qualifications: ["MBBS", "MS (Orthopedics)"],
    services: ["Bone Check", "Joint Pain Care", "Fracture Treatment"],
  },
  {
    id: 5,
    name: "Dr. Ruma Chowdhury",
    specialty: "Gynecologist",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    experience: "14+ Years",
    fees: "900 – 1800 BDT",
    schedule: "Sun–Thu (11 AM - 5 PM)",
    about: "Women's health, pregnancy care & fertility specialist.",
    qualifications: ["MBBS", "FCPS (Gynae)"],
    services: ["Pregnancy Check", "Fertility Care", "Ultrasound Review"],
  },
  {
    id: 6,
    name: "Dr. Arif Mahmud",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    experience: "9+ Years",
    fees: "500 – 900 BDT",
    schedule: "Mon–Fri (10 AM - 3 PM)",
    about: "Child healthcare, nutrition, growth monitoring & vaccination expert.",
    qualifications: ["MBBS", "DCH (Child Specialist)"],
    services: ["Child Checkup", "Vaccination", "Nutrition Plan"],
  },
  {
    id: 7,
    name: "Dr. Afsana Jahan",
    specialty: "Psychologist",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67",
    experience: "6+ Years",
    fees: "800 – 1500 BDT",
    schedule: "Sat–Thu (2 PM - 7 PM)",
    about: "Expert in depression, anxiety, trauma healing & mental counseling.",
    qualifications: ["MS (Psychology)", "Certified Counselor"],
    services: ["Counseling", "Stress Therapy", "Behavioral Support"],
  },
  {
    id: 8,
    name: "Dr. Kamal Uddin",
    specialty: "ENT Specialist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    experience: "13+ Years",
    fees: "700 – 1200 BDT",
    schedule: "Sun–Thu (10 AM - 4 PM)",
    about: "Ear infection, sinus, throat pain & hearing problems specialist.",
    qualifications: ["MBBS", "MS (ENT)"],
    services: ["Ear Checkup", "Nose/Sinus Care", "Throat Exam"],
  },
  {
    id: 9,
    name: "Dr. Mehnaz Afreen",
    specialty: "Eye Specialist",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa25e6c9",
    experience: "7+ Years",
    fees: "600 – 1200 BDT",
    schedule: "Sat–Wed (9 AM - 2 PM)",
    about: "Vision test, infection, eye power check & cataract screening.",
    qualifications: ["MBBS", "FCPS (Eye)"],
    services: ["Eye Power Test", "Vision Screening", "Eye Pressure Check"],
  },
  {
    id: 10,
    name: "Dr. Rayhan Ahmed",
    specialty: "Dentist",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
    experience: "11+ Years",
    fees: "600 – 2000 BDT",
    schedule: "Everyday (10 AM - 8 PM)",
    about: "Teeth cleaning, filling, extraction, scaling & gum treatment.",
    qualifications: ["BDS", "MDS"],
    services: ["Teeth Cleaning", "Dental Filling", "Gum Treatment"],
  },
  {
    id: 11,
    name: "Dr. Zarin Tasnim",
    specialty: "Nutritionist",
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb",
    experience: "5+ Years",
    fees: "500 – 1000 BDT",
    schedule: "Mon–Fri (3 PM - 7 PM)",
    about: "Weight loss, diabetic diet, child nutrition & lifestyle planning.",
    qualifications: ["BSc (Nutrition)", "MSc (Food Science)"],
    services: ["Diet Plan", "Body Fat Analysis", "Calorie Chart"],
  },
  {
    id: 12,
    name: "Dr. Rakib Hasan",
    specialty: "Physiotherapist",
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f51c",
    experience: "9+ Years",
    fees: "700 – 1500 BDT",
    schedule: "Sat–Thu (11 AM - 6 PM)",
    about: "Pain therapy, injury rehab, paralysis recovery & posture correction.",
    qualifications: ["BPT", "MPT"],
    services: ["Therapy Session", "Exercise Plan", "Rehab Support"],
  }
];


  const doctor = doctors.find(d => d.id === id);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/Login');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Loading...</p>;
  if (!doctor) return <p className="text-center text-red-500">Doctor Not Found</p>;

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between gap-4">

      <section className="max-w-3xl mx-auto py-16 px-5">
        <Link href="/Doctors" className="text-emerald-600 underline hover:text-emerald-700">
          ← Back to Doctors
        </Link>

        <div className="bg-gray-100 p-8 rounded-xl shadow mt-4">
          <img src={doctor.image} className="w-40 h-40 object-cover rounded-xl" />

          <h1 className="text-4xl font-bold text-emerald-700 mt-4">
            {doctor.name}
          </h1>

          <p className="text-lg text-gray-700">{doctor.specialty}</p>

          <p className="mt-4 text-gray-700">{doctor.about}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Experience:</h3>
            <p className="text-gray-800">{doctor.experience}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Fees:</h3>
            <p className="text-gray-800">{doctor.fees}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Schedule:</h3>
            <p className="text-gray-800">{doctor.schedule}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Qualifications:</h3>
            <ul className="list-disc ml-6 text-gray-800">
              {doctor.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Services:</h3>
            <ul className="list-disc ml-6 text-gray-800">
              {doctor.services.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <AppointmentForm />
    </div>
  );
}
