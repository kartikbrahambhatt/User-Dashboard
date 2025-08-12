import React, { useEffect, useState } from "react";

function BlogsViewOnly() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("mongodb+srv://kartikbrahambhatt08:kartik123@blog.zf0bned.mongodb.net/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleView = (blog) => {
    setSelectedBlog(blog);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const filteredBlogs = blogs.filter((blog) =>
  blog.blogName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  blog.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="p-6">
      {!selectedBlog ? (
        <>
          <input
            type="text"
            placeholder="Search by blog name..."
            className="w-full md:w-1/2 mb-6 p-2 border rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                >
                  {blog.image && (
                    <img
                      src={`http://localhost:4000/uploads/blogs/${blog.image}`}
                      alt={blog.blogTitle}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1">{blog.blogName}</h3>
                    <p className="text-sm text-gray-600 mb-2">{blog.blogTitle}</p>
                    <p className="text-gray-700 text-sm truncate">
                      {stripHtml(blog.description)}
                    </p>
                    <button
                      onClick={() => handleView(blog)}
                      className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                    >
                      Full Blog
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">No blogs found.</p>
            )}
          </div>
        </>
      ) : (
        <div className="w-full mx-0 bg-white p-6 rounded shadow-lg">
          {selectedBlog.image && (
            <div className="w-full mb-6">
              <img
                src={`http://localhost:4000/uploads/blogs/${selectedBlog.image}`}
                alt={selectedBlog.blogTitle}
                className="w-full max-h-[500px] object-cover rounded-lg"
              />
            </div>
          )}

          <div className="space-y-4 pr-32">
            <div>
              <label className="font-semibold text-gray-700">Blog Name: </label>
              <span>{selectedBlog.blogName}</span>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Blog Title: </label>
              <span>{selectedBlog.blogTitle}</span>
            </div>
            <div>
              <label className="font-semibold text-gray-700">Description: </label>
              <div
                className="text-gray-800 mt-1"
                dangerouslySetInnerHTML={{ __html: selectedBlog.description }}
              />
            </div>
          </div>

          <button
            onClick={handleBack}
            className="mt-6 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Back to Blogs
          </button>
        </div>
      )}
    </div>
  );
}

export default BlogsViewOnly;
