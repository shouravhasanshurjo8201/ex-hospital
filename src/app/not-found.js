export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <a href="/" className="mt-6 inline-block text-blue-400 underline">
        Go Back Home
      </a>
    </div>
  );
}
