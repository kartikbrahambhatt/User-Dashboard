import React, { useEffect, useState } from "react";

function InsightsViewOnly() {
  const [insights, setInsights] = useState([]);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const res = await fetch("https://database-bg72.onrender.com/api/insights");
      const data = await res.json();
      setInsights(data);
    } catch (error) {
      console.error("Error fetching insights:", error);
    }
  };

  const handleView = (insight) => {
    setSelectedInsight(insight);
  };

  const handleBack = () => {
    setSelectedInsight(null);
  };

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const filteredInsights = insights.filter((item) =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.Category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {!selectedInsight ? (
        <div className="px-6 py-10">
          <input
            type="text"
            placeholder="Search by category or title..."
            className="w-full md:w-1/2 mb-6 p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.length > 0 ? (
              filteredInsights.map((item) => (
                <div key={item._id} className="bg-inherit overflow-hidden">
                  <img
                    src={`https://database-bg72.onrender.com/uploads/insights/${item.Image}`}
                    alt={item.Title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="bg-inherit">
                    <p className="text-sm text-gray-600 mb-2">{item.Category}</p>
                    <h3
                      onClick={() => handleView(item)}
                      className="text-xl font-bold mb-1 hover:text-blue-700 cursor-pointer"
                    >
                      {item.Title}
                    </h3>
                    <p className="text-gray-700 text-sm truncate">
                      {stripHtml(item.Description)}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">No insights found.</p>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-inherit p-0">
          <div className="w-full px-6 py-10 space-y-6 bg-inherit">
            <h1 className="text-4xl font-bold text-center text-black-800">
              {selectedInsight.Title}
            </h1>
            <p className="text-left text-gray-600 text-md">
              By: {selectedInsight.AuthorName}
            </p>
            <hr className="font-thin" />
            <h2 className="text-2xl font-semibold text-gray-700 mt-6">
              {selectedInsight.Heading}
            </h2>
            <div
              className="text-gray-800 mt-2 text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedInsight.Description }}
            />
            <div className="text-left">
              <button
                onClick={handleBack}
                className="mt-8 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900"
              >
                Back to Insights
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InsightsViewOnly;
