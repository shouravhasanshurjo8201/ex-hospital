export default function Gallery() {
  const images = [
    "https://i.postimg.cc/x8yqwJG2/images-(18).jpg",
    "https://i.postimg.cc/dVWZQybt/images-(17).jpg",
    "https://i.postimg.cc/KYr75zwb/images-(13).jpg",
    "https://i.postimg.cc/59GzLLyj/images-(14).jpg",
    "https://i.postimg.cc/8kqHDqhY/images-(15).jpg",
    "https://i.postimg.cc/4ytpmxz0/images-(16).jpg"
  ];

  return (
    <section className="pt-16">
      <h2 className="text-3xl font-bold text-center text-emerald-600 mb-10">Hospital Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={img}
              className="w-full h-56 object-cover hover:scale-110 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}