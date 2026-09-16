function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Welcome to MeduraX
        </h1>

        <p className="mt-4 text-gray-600">
          Book your doctor appointment easily.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Find Doctors
        </button>
      </div>
    </div>
  );
}

export default Home;
