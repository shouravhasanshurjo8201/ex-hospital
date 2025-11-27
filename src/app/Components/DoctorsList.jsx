import Link from "next/link";

export default function DoctorsList() {
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

  ];
  return (
    <section className="pt-16">
      <h2 className="text-3xl text-emerald-600 font-bold text-center mb-10">Our Expert Doctors</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">

        {doctors.map((doctor) => (
          <Link key={doctor.id}
            href={`/Doctors/${doctor.id}`}>
            <div className="bg-gray-100 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1 p-6 text-center border-t-2 border-l-2 border-b-2 border-r-2 border-emerald-600 border-b-amber-600 border-r-amber-600">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-40 w-40 object-cover rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{doctor.name}</h3>
              <p className="text-emerald-600 font-medium">{doctor.specialty}</p>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
