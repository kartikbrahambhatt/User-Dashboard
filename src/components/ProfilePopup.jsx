import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePopup = ({ onClose }) => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md p-4 w-64 z-50">
      <div className="flex items-center space-x-4">
        {user.picture ? (

          <img
            src={user.picture}
            alt="User Profile"
            className="w-10 h-10 rounded-full"
            referrerPolicy="no-referrer"
          />
        ) : (

          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
        <div className="max-w-[140px] whitespace-normal break-words">
          <p className="font-semibold text-sm leading-tight">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-gray-600 break-words leading-tight">
            {user.email}
          </p>
        </div>

      </div>
      <button
        onClick={() => {
          logout();
          onClose();
        }}
        className="mt-4 w-full text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfilePopup;
