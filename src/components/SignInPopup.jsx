import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../context/AuthContext";

function SignInPopup() {
  const { login, togglePopup } = useAuth(); 

  const handleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const decoded = jwtDecode(token);
      const response = await axios.post("http://localhost:4000/api/google-login", { token });

      login(response.data.user); 
      togglePopup();
    } catch (error) {
      console.error("Google login failed", error);
    }
  };

  return (
    <div className="absolute top-full left-0 mt-2 z-50 bg-white p-6 rounded-lg shadow-lg">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error("Login Failed")}
      />
      <button
        onClick={togglePopup}
        className="mt-4 px-4 py-2 w-full bg-red-600 text-white rounded hover:bg-red-700"
      >
        Close
      </button>
    </div>
  );
}

export default SignInPopup;
