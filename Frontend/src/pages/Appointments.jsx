function Appointments() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Appointments
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold">
          No Appointments Yet
        </h2>

        <p className="text-gray-500 mt-2">
          Your booked appointments will appear here.
        </p>
      </div>

    </div>
  );
}

export default Appointments;
