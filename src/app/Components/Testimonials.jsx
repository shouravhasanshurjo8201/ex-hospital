export default function Testimonials() {
  const reviews = [
    {
      name: "Rahim Uddin",
      text: "Excellent service and wonderful environment. Doctors are very caring!"
    },
    {
      name: "Sumi Akter",
      text: "Best hospital I have ever visited. Staffs are friendly and helpful."
    },
    {
      name: "Jamil Hasan",
      text: "Modern equipment and fast treatment system. Highly recommended!"
    },
    {
      name: "Rafat Hasan",
      text: "Modern equipment and fast treatment system. Highly recommended!"
    }
  ];

  return (
    <section className="pt-16">
      <h2 className="text-3xl font-bold text-emerald-600 text-center mb-10">What Our Patients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition  border-l-4 border-r-4 border-emerald-600 border-r-amber-600">
            <p className="text-gray-600 mb-4">“{r.text}”</p>
            <h4 className="font-bold">— {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
