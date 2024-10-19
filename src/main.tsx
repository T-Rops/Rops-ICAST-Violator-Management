import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './global.css';
import IcastEncoder from './pages/icastencoder';
import PoliceHome from './pages/policehome';
import DetailPage from './pages/DetailPage';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check the username and password
    if (username === 'admin' && password === 'password123') {
      navigate('/icastencoder');  
    } 
    if (username === 'police' && password === 'password123') { 
      navigate('/policehome');
    }
    else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="src\assets\ICAST_Logo.png"
            alt="Logo"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/icastencoder" element={<IcastEncoder />} />
        <Route path="/policehome" element={<PoliceHome />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Main />);
