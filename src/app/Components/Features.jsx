export default function Features() {
  const features = [
    {
      title: "24/7 Emergency Care",
      desc: "Our emergency team is always ready to serve you at any time.",
      icon: "🚑"
    },
    {
      title: "Experienced Doctors",
      desc: "Get treatment from highly professional and experienced doctors.",
      icon: "👨‍⚕️"
    },
    {
      title: "Modern Equipment",
      desc: "We use advanced medical technology for accurate diagnosis.",
      icon: "🩺"
    },
    {
      title: "Pharmacy Support",
      desc: "A complete pharmacy available inside the hospital premises.",
      icon: "💊"
    }
  ];

  return (
    <section className="pt-16">
      <h2 className="text-3xl font-bold text-center text-emerald-700 mb-10">Why Choose Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition border-t-3 border-l-3 border-emerald-600 border-l-amber-600">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}