export default function ServiceBookingForm() {

    return (
        <section className="pt-16">
            <h2 className="text-3xl font-bold text-center text-emerald-600 mb-8">Book a Service</h2>
            <form className="max-w-xl mx-auto bg-gray-100 p-8 rounded-xl shadow">
                <div className="">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border p-3 my-2 rounded w-full"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="border p-3 my-2 rounded w-full"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border p-3 my-2 rounded w-full"
                    />
                </div>

                <textarea
                    placeholder="Describe your requirements..."
                    className="border p-3 rounded w-full mt-4"
                    rows="4"
                ></textarea>

                <button className="bg-emerald-500 hover:bg-emerald-700 w-full mt-4 py-3 text-white font-bold rounded">
                    Submit Request
                </button>
            </form>
        </section>
    );
}