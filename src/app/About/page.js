export default function About() {
  const Offer = [
    { title: "24/7 Emergency Care", desc: "Instant medical support with experienced doctors available round-the-clock." },
    { title: "Advanced Diagnostics", desc: "Modern lab tests, digital x-ray, ultrasound & full body health check-ups." },
    { title: "Specialized Doctors", desc: "Highly qualified specialists in cardiology, neurology, orthopedics & more." },
    { title: "Operation Theatre", desc: "Fully equipped OT with world-class surgical facilities." },
    { title: "Outdoor & Indoor Services", desc: "Comfortable cabins, wards, and daily outdoor patient consultation." },
    { title: "Pharmacy & Ambulance", desc: "24/7 running pharmacy and emergency ambulance support." },
  ]
  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 mb-5 text-center">
          About EX Hospital
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          EX Hospital is a trusted and modern healthcare center dedicated to
          providing world-class medical services with compassion, safety, and
          advanced technology. Since our establishment, our mission has been
          to ensure better patient care and accessible treatment for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-md rounded-2xl border-l-4 border-emerald-500">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to deliver top-quality healthcare through highly
              skilled doctors, modern technology, and a caring environment.
              We aim to treat every patient with dignity and ensure their
              complete physical and emotional well-being.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-2xl border-l-4 border-blue-500">
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become the most trusted healthcare center in
              the country — offering affordable, safe, and reliable medical
              support. We work to create a healthier community through advanced
              treatment and continuous innovation.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-emerald-700 mb-5 text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Offer.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-md rounded-xl hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white shadow-md p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-center text-emerald-700 mb-6">
            Our Expert Medical Team
          </h2>

          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            EX Hospital is proud to have a team of highly experienced doctors,
            nurses, and medical professionals who are committed to patient
            safety and accurate diagnosis. Their dedication ensures every
            patient receives the best possible treatment.
          </p>
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
            We Are Here For You
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            No matter what your health concerns are, EX Hospital is always
            ready to assist you with care, respect, and advanced medical support.
            Your health is our priority.
          </p>
        </div>
      </div>
    </div>
  );
}