'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/app/Firebase/Firebase.config';
import ServiceBookingForm from '@/app/Components/ServiceBookingForm';
import Link from 'next/link';

export default function ServiceDetailsClient() {
  const params = useParams();
  const id = parseInt(params.id);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

   const services = [
        {
            id: 1,
            title: "General Consultation",
            icon: "🩺",
            desc: "Primary health checkup with expert guidelines, symptom assessment, and personalized treatment advice.",
            price: "500 - 700 BDT",
            duration: "10–15 minutes",
            includes: ["Basic health checkup", "Symptom analysis", "Treatment plan"],
            requirements: "Bring previous medical reports (if any)."
        },
        {
            id: 2,
            title: "Cardiology",
            icon: "❤️",
            desc: "Complete heart care including ECG evaluation, chest discomfort diagnosis, and cardiovascular risk analysis.",
            price: "1500 - 2500 BDT",
            duration: "20–25 minutes",
            includes: ["ECG report check", "Heart risk assessment", "Lifestyle plan"],
            requirements: "Avoid caffeine 6 hours before checkup."
        },
        {
            id: 3,
            title: "Neurology",
            icon: "🧠",
            desc: "Diagnosis and treatment for migraine, nerve pain, dizziness, and neurological disorders.",
            price: "1200 - 2000 BDT",
            duration: "25 minutes",
            includes: ["Nerve test", "Brain health evaluation", "Treatment plan"],
            requirements: "Inform if you have seizures."
        },
        {
            id: 4,
            title: "Orthopedics",
            icon: "🦴",
            desc: "Bone, joint, and muscle-related treatments with advanced orthopedic assessment.",
            price: "800 - 1500 BDT",
            duration: "15–25 minutes",
            includes: ["Joint exam", "Injury analysis", "Pain management"],
            requirements: "Bring X-Ray if taken previously."
        },
        {
            id: 5,
            title: "Pediatrics",
            icon: "👶",
            desc: "Child healthcare, nutrition review, fever, cough, growth monitoring and vaccinations.",
            price: "500 - 900 BDT",
            duration: "15–20 minutes",
            includes: ["Child exam", "Vaccination advice", "Growth chart review"],
            requirements: "Bring vaccination card."
        },
        {
            id: 6,
            title: "Dermatology",
            icon: "🌿",
            desc: "Professional skincare including acne, eczema, skin infection, pigmentation, and hair fall treatment.",
            price: "800 - 1500 BDT",
            duration: "20 minutes",
            includes: ["Skin exam", "Treatment routine", "Product guideline"],
            requirements: "Avoid makeup before visit."
        },
        {
            id: 7,
            title: "Dental Care",
            icon: "😁",
            desc: "Teeth cleaning, filling, extraction, scaling, polishing, and gum treatment.",
            price: "600 - 2000 BDT",
            duration: "30–45 minutes",
            includes: ["Teeth exam", "Cleaning/Fillings", "Oral hygiene plan"],
            requirements: "Avoid eating 1 hour before."
        },
        {
            id: 8,
            title: "Maternity Care",
            icon: "🤰",
            desc: "Safe pregnancy care, ultrasound, nutrition support, and delivery preparation.",
            price: "1000 - 2500 BDT",
            duration: "20–30 minutes",
            includes: ["Mother checkup", "Ultrasound (if needed)", "Diet plan"],
            requirements: "Bring previous ultrasound reports."
        },
        {
            id: 9,
            title: "Eye Care",
            icon: "👁️",
            desc: "Complete vision testing, eye power, cataract evaluation, and infection treatment.",
            price: "500 - 1200 BDT",
            duration: "10–15 minutes",
            includes: ["Eye power test", "Vision chart test", "Eye pressure check"],
            requirements: "Remove contact lenses before 1 hour."
        },
        {
            id: 10,
            title: "ENT (Ear, Nose, Throat)",
            icon: "👂",
            desc: "Ear infection, sinus problems, throat pain, allergy checkup, and hearing test.",
            price: "600 - 1200 BDT",
            duration: "15 minutes",
            includes: ["Ear exam", "Nose/sinus test", "Throat exam"],
            requirements: "Mention if you have allergies."
        },
        {
            id: 11,
            title: "Physiotherapy",
            icon: "🧘‍♂️",
            desc: "Pain relief therapy, paralysis recovery, muscle injury rehab, and body posture correction.",
            price: "700 - 1500 BDT",
            duration: "30–45 minutes",
            includes: ["Therapy session", "Exercise guideline", "Pain management"],
            requirements: "Wear comfortable clothing."
        },
        {
            id: 12,
            title: "Psychology",
            icon: "🧘",
            desc: "Mental health counseling for depression, anxiety, stress, and emotional challenges.",
            price: "800 - 2000 BDT",
            duration: "30–40 minutes",
            includes: ["Counseling session", "Mind relaxation plan", "Behavioral guideline"],
            requirements: "Confidential session guaranteed."
        },
        {
            id: 13,
            title: "Nutrition & Diet",
            icon: "🥦",
            desc: "Personalized diet plan, weight loss, diabetic diet, and healthy lifestyle consultation.",
            price: "500 - 1000 BDT",
            duration: "20–25 minutes",
            includes: ["Diet plan", "Body fat check", "Calorie chart"],
            requirements: "Bring previous medical stats."
        },
        {
            id: 14,
            title: "Diagnostic Lab",
            icon: "🧪",
            desc: "Blood test, urine test, thyroid test, sugar level test, and hormone test with accurate reporting.",
            price: "300 - 2000 BDT",
            duration: "Varies by test",
            includes: ["Sample collection", "Lab analysis", "Digital report"],
            requirements: "Fasting required for some tests."
        },
        {
            id: 15,
            title: "X-Ray & Imaging",
            icon: "🩻",
            desc: "Digital X-Ray, CT Scan, MRI, and Ultrasound with high-quality imaging.",
            price: "600 - 5000 BDT",
            duration: "10–20 minutes",
            includes: ["Digital imaging", "Printed report", "Online report access"],
            requirements: "Wear no metal objects."
        },
        {
            id: 16,
            title: "Vaccination",
            icon: "💉",
            desc: "Vaccines for children & adults including flu, tetanus, typhoid, hepatitis, HPV and more.",
            price: "200 - 3000 BDT",
            duration: "5 minutes",
            includes: ["Vaccine dose", "Basic health check", "Vaccine card update"],
            requirements: "Notify if pregnant (for specific vaccines)."
        },
        {
            id: 17,
            title: "Emergency Care",
            icon: "🚑",
            desc: "24/7 emergency services including injuries, accidents, high fever, chest pain, and critical conditions.",
            price: "Depends on condition",
            duration: "Instant response",
            includes: ["Emergency check", "Immediate treatment", "Ambulance support"],
            requirements: "Bring ID if possible."
        },
        {
            id: 18,
            title: "Pharmacy Support",
            icon: "💊",
            desc: "Full-stock medicines, health supplements, baby products, and doctor-prescribed items.",
            price: "MRP Based",
            duration: "2–5 minutes",
            includes: ["Medicine purchase", "Prescription check", "Health product"],
            requirements: "Bring doctor’s prescription if required."
        },
        {
            id: 19,
            title: "Surgery",
            icon: "🔪",
            desc: "Minor & major surgeries with modern operation theater, anesthesia support, and post-surgery care.",
            price: "5000 - 80,000 BDT",
            duration: "Varies by surgery",
            includes: ["Operation", "Recovery care", "Follow-up"],
            requirements: "Pre-surgery tests required."
        },
        {
            id: 20,
            title: "Health Checkup Packages",
            icon: "📋",
            desc: "Full body screening including heart, kidney, liver, diabetes, blood pressure and more.",
            price: "1500 - 5000 BDT",
            duration: "45–60 minutes",
            includes: ["Blood test", "ECG", "Urine test", "Full health report"],
            requirements: "Arrive fasting (8 hours)."
        },
    ];

  const service = services.find(s => s.id === id);

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

  if (!service) return <p className="text-center text-6xl text-red-500">Service Not Found</p>;

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row justify-between gap-4">
      
      <section className="max-w-3xl mx-auto py-16 px-5">
        <Link href="/Services" className="text-emerald-600 underline hover:text-emerald-700">
          ← Back to Services
        </Link>

        <div className="bg-gray-100 p-8 rounded-xl shadow mt-4">
          <div className="text-6xl">{service.icon}</div>

          <h1 className="text-4xl font-bold text-emerald-700 mt-4">
            {service.title}
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">{service.desc}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Price:</h3>
            <p className="text-gray-800">{service.price}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Duration:</h3>
            <p className="text-gray-800">{service.duration}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Includes:</h3>
            <ul className="list-disc ml-6 text-gray-800">
              {service.includes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-600">Requirements:</h3>
            <p className="text-gray-800">{service.requirements}</p>
          </div>
        </div>
      </section>

      <ServiceBookingForm />
    </div>
  );
}
