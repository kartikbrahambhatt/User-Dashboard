import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import './index.css';
import App from './App.jsx';

const GOOGLE_CLIENT_ID = "497310915536-81vumqe1s5h5i1qg35eoboua54s482j4.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>

);
