import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RBACProvider } from './context/RBACContext'; // Import the provider
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Roles from './pages/Roles';
import RolePermissions from './components/RoleManagement/RolePermissions';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Import the Home component
import Login from './pages/Login'; // Import the Login page
import Logout from './pages/Logout'; // Import the Logout page
import Setting from './pages/setting'; // Import the Setting page

const App = () => {
  return (
    <RBACProvider>
      {/* Wrap your app with the RBACProvider */}
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow p-4">
          {/* Routes */}
          <Routes>
            {/* Authentication Routes - Login and Logout first */}
            <Route path="/login" element={<Login />} /> {/* Login page */}
            <Route path="/logout" element={<Logout />} /> {/* Logout page */}
            
            {/* Home Page */}
            <Route path="/home" element={<Home />} /> {/* Home page */}

            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} /> {/* Dashboard page */}
            
            {/* User Management Routes */}
            <Route path="/users" element={<Users />} />
            <Route path="/roles" element={<Roles />} />
            
            {/* Role Permissions Management */}
            <Route
              path="/permissions"
              element={
                <RolePermissions
                  roleId={1} // Replace with dynamic ID as needed
                  refresh={() => {
                    console.log('Permissions refreshed');
                  }}
                />
              }
            />

            {/* Settings Route */}
            <Route path="/settings" element={<Setting />} /> {/* Settings page */}

            {/* Catch-all Route for 404 */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </RBACProvider>
  );
};

export default App;
