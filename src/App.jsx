import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from "./components/Home";
import Interviews from "./components/Interviews";
import Blogs from './components/Blogs';
import Insight from './components/Insight';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            
            <Route
              path="interviews"
              element={
                <ProtectedRoute>
                  <Interviews />
                </ProtectedRoute>
              }
            />
            <Route
              path="blogs"
              element={
                <ProtectedRoute>
                  <Blogs />
                </ProtectedRoute>
              }
            />
            <Route
              path="Insight"
              element={
                <ProtectedRoute>
                  <Insight />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
