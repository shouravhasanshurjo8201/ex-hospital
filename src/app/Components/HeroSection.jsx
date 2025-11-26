export default function HeroSection() {
    return (
        <section
            className="relative w-11/12 mx-auto h-[60vh] flex items-center justify-center text-white rounded-2xl"
            style={{
                backgroundImage: "url('https://i.postimg.cc/KvX4vkP8/images-(12).jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-30 rounded-2xl "></div>

            <div className="relative z-10 text-center px-5 max-w-3xl ">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    Providing World-Class Healthcare with Compassion
                </h1>

                <p className="text-lg md:text-xl mb-8">
                    Your health is our priority — advanced technology, expert doctors & 24/7 emergency services.
                </p>

                <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 transition font-semibold rounded-lg shadow-lg text-white">
                    Book Appointment
                </button>
            </div>
        </section>
    );
}
