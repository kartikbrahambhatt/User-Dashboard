import React, { useState, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import SignInPopup from './SignInPopup';
import ProfilePopup from './ProfilePopup';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const signInButtonRef = useRef(null);

  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-white shadow-md p-4 flex justify-between items-center flex-wrap gap-4 md:flex-nowrap">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <div className="text-xl font-bold text-blue-700">
            <img
              src="../../A.png"
              alt="Dashboard Icon"
              className="w-auto h-10"
            />
          </div>
          <div className="text-2xl hidden md:block pl-70">
            <nav className="flex gap-4 text-sm">
              <Link
                to="/"
                className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/interviews"
                className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/interviews" ? "text-blue-600 font-semibold" : ""}`}
              >
                Interviews
              </Link>
              <Link
                to="/blogs"
                className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/blogs" ? "text-blue-600 font-semibold" : ""}`}
              >
                Blogs
              </Link>
              <Link
                to="/Insight"
                className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/Insight" ? "text-blue-600 font-semibold" : ""}`}
              >
                Insight
              </Link>
            </nav>
          </div>
        </div>

        {/* Search Bar and Profile/Sign In */}
        <div className="flex gap-4 relative w-full md:w-auto items-center justify-between md:justify-start">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-3xl px-3 py-1 flex-1 min-w-[150px] md:min-w-[200px]"
          />
          {!user ? (
            <>
              <button
                ref={signInButtonRef}
                onClick={() => setShowSignInPopup((prev) => !prev)}
                className="bg-blue-600 text-white px-4 py-2 rounded-3xl whitespace-nowrap"
              >
                Sign In
              </button>
              {showSignInPopup && (
                <div className="absolute top-full right-0 mt-2 z-50" style={{ minWidth: "250px" }}>
                  <SignInPopup closePopup={() => setShowSignInPopup(false)} />
                </div>
              )}
            </>
          ) : (
            <>
              <img
                src={user.picture}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setShowProfilePopup((prev) => !prev)}
              />
              {showProfilePopup && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <ProfilePopup onClose={() => setShowProfilePopup(false)} />
                </div>
              )}
            </>
          )}
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <nav className="flex justify-around bg-white shadow-md p-2 md:hidden text-sm border-t border-gray-200">
        <Link
          to="/"
          className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/" ? "text-blue-600 font-semibold" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/interviews"
          className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/interviews" ? "text-blue-600 font-semibold" : ""}`}
        >
          Interviews
        </Link>
        <Link
          to="/blogs"
          className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/blogs" ? "text-blue-600 font-semibold" : ""}`}
        >
          Blogs
        </Link>
        <Link
          to="/Insight"
          className={`cursor-pointer hover:text-blue-500 ${location.pathname === "/Insight" ? "text-blue-600 font-semibold" : ""}`}
        >
          Insight
        </Link>
      </nav>

      <main className="flex-1 pb-6 overflow-auto">
        <div className="bg-white space-y-4">
          <Outlet />
        </div>
      </main>

      <footer className="bg-blue-50 shadow-inner">
        <div className="max-w-9xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
          <div>
            <h3 className="text-lg font-semibold mb-2">New Delhi</h3>
            <p>123 Manhattan Ave, Suite 5A<br />New Delhi, ND 10001</p>
            <p className="mt-2">📞 +91 98290 12345 </p>
            <p>✉️ support@company.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">London</h3>
            <p>71-75 Shelton Street, Covent Garden<br />London, WC2H 9JQ</p>
            <p className="mt-2">📞 +44 20 7946 0958</p>
            <p>✉️ support@company.co.uk</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Jaipur</h3>
            <p>Vidhema Office, 3rd Floor, Gopalpura Bypass<br />Jaipur, RJ 302019</p>
            <p className="mt-2">📞 +91 98290 12345</p>
            <p>✉️ support@vidhema.in</p>
          </div>
        </div>
        <div className="border-t border-gray-200 text-center py-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Vidhema Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;