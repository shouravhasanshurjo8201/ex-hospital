export default function AppointmentForm() {
  return (
    <section className="pt-16">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">Book an Appointment</h2>
      <form className="bg-gray-100 p-8 rounded-xl shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border mt-2 p-3 rounded w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border mt-2 p-3 rounded w-full"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border mt-2 p-3 rounded w-full"
          />
        </div>
        <textarea
          placeholder="Describe your symptoms..."
          className="border p-3 rounded w-full mt-4"
          rows="4"
        ></textarea>
        <button className="bg-emerald-600 hover:bg-emerald-700 w-full mt-4 py-3 text-white font-bold rounded">
          Submit Appointment
        </button>
      </form>
    </section>
  );
}