import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

function BlogSlider() {
  const [blogs, setBlogs] = useState([]);
  const sliderRef = useRef(null);
  const scrollSpeed = 0.5;

  useEffect(() => {
    fetch('https://database-bg72.onrender.com/api/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs([...data, ...data])) // 👈 Duplicate blogs for seamless loop
      .catch((err) => {
        toast.error('Failed to fetch blogs');
        console.error(err);
      });
  }, []);

  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId;

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        // 👈 Reset scroll to beginning when halfway through (since it's duplicated)
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollSpeed;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [blogs]);

  return (
    <div className="bg-blue-100 py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">Our Latest Blogs</h2>
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
        style={{ scrollBehavior: 'auto' }} // 👈 Avoid conflict with JS smooth scroll
      >
        {blogs.map((blog, index) => (
          <div
            key={blog._id + '-' + index} // 👈 Add index to avoid key duplication
            className="min-w-[300px] max-w-xs bg-white rounded-xl shadow-md p-4 flex-shrink-0"
          >
            <img
              src={`https://database-bg72.onrender.com/uploads/blogs/${blog.image}`}
              alt={blog.blogTitle}
              className="w-full h-40 object-cover rounded-md mb-3"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/300x160?text=No+Image';
              }}
            />
            <h3 className="text-xl font-semibold">{blog.blogName}</h3>
            <p className="text-gray-500 text-sm">{blog.blogTitle}</p>
            <p className="text-gray-600 text-xs mt-1">
              {stripHtml(blog.description).slice(0, 60)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSlider;
