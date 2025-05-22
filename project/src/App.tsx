import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          } />
          <Route path="/signup" element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } />
          <Route path="/dashboard/*" element={
            <PrivateRoute>
              <Layout>
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route path="projects" element={<Dashboard />} />
                  <Route path="deployments" element={<Dashboard />} />
                  <Route path="analytics" element={<Dashboard />} />
                  <Route path="domains" element={<Dashboard />} />
                  <Route path="integrations" element={<Dashboard />} />
                  <Route path="security" element={<Dashboard />} />
                  <Route path="settings" element={<Dashboard />} />
                  <Route path="profile" element={<Dashboard />} />
                </Routes>
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;