import { useEffect, useState } from "react";

const AdminPage = () => {
  const [formData, setFormData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchFormData");
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          console.error("Error fetching form data");
        }
      } catch (error) {
        console.error("Error fetching form data", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/deleteFormData/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        const updatedFormData = formData.filter((entry) => entry._id !== id);
        setFormData(updatedFormData);
      } else {
        console.error("Error deleting form data");
      }
    } catch (error) {
      console.error("Error deleting form data", error);
    }
  };
  useEffect(() => {
    const filteredData = formData.filter((entry) =>
      Object.values(entry).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFormData(filteredData);
  }, [searchTerm]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Form Data</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md mr-4 focus:outline-none"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(formData) && formData.length > 0 ? (
              formData.map((entry) => (
                <tr key={entry._id} className="border-t border-gray-300">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.number}</td>
                  <td className="px-4 py-2">
                    {new Date(entry.date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-2">{entry.time}</td>
                  <td className="px-4 py-2">{entry.message}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDelete(entry._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
