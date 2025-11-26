export default function Services() {
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
        
    ];

    return (
        <section className="pt-16 px-5">
            <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">
                Our Medical Services
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {services.map((service) => (
                    <a key={service.id} href={`/Services/${service.id}`}>
                        <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition 
                    border-t-2 border-b-2 border-emerald-600 border-b-amber-600 min-h-58">
                            <div className="text-center">
                                <span className="text-4xl">{service.icon}</span>
                                <h3 className="text-xl font-semibold text-emerald-700 mt-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-start mt-2">
                                    {service.desc.slice(0, 70)}...
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
