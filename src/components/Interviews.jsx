import React, { useEffect, useState } from "react";

function InterviewsViewOnly() {
  const [interviews, setInterviews] = useState([]);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInterviews();
  }, []);

  const fetchInterviews = async () => {
    try {
      const res = await fetch("https://database-bg72.onrender.com/api/interviews");
      const data = await res.json();
      setInterviews(data);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    }
  };

  const handleView = (interview) => {
    setSelectedInterview(interview);
  };

  const handleBack = () => {
    setSelectedInterview(null);
  };

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // 🔍 Filtered interviews by Name
  const filteredInterviews = interviews.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {!selectedInterview ? (
        <div className="p-4">
          {/* 🔍 Search Bar */}
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full md:w-1/2 mb-6 p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Interview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInterviews.length > 0 ? (
              filteredInterviews.map((item) => (
                <div
                  key={item._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  <img
                    src={`https://database-bg72.onrender.com/uploads/interviews/${item.Image}`}
                    alt={item.Name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{item.Name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.Position}</p>
                    <p className="text-gray-700 text-sm truncate">
                      {stripHtml(item.Description)}
                    </p>
                    <button
                      onClick={() => handleView(item)}
                      className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                    >
                      Full Interview
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">No interviews found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-white rounded shadow-lg p-0">
          <div className="w-full h-[500px] overflow-hidden">
            <img
              src={`https://database-bg72.onrender.com/uploads/interviews/${selectedInterview.Image}`}
              alt={selectedInterview.Name}
              className="w-full h-full p-6 object-cover"
            />
          </div>

          <div className="w-full px-6 py-10 space-y-6">
            <div>
              <label className="font-semibold text-gray-700">Name: </label>
              <span>{selectedInterview.Name}</span>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Position: </label>
              <span>{selectedInterview.Position}</span>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Company Name: </label>
              <span>{selectedInterview.CompanyName}</span>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Company URL: </label>
              <a
                href={selectedInterview.CompanyURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                {selectedInterview.CompanyURL}
              </a>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Description: </label>
              <div
                className="text-gray-800 mt-1"
                dangerouslySetInnerHTML={{ __html: selectedInterview.Description }}
              />
            </div>

            <button
              onClick={handleBack}
              className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
            >
              Back to Interviews
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InterviewsViewOnly;
