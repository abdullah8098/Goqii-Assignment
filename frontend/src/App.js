import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

const App = () => {
    const getCsrfToken = async () => {
      await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'same-origin', // Required for Sanctum
      });
    };
    useEffect(() => {
      getCsrfToken();  // Call it once when the app starts
    }, []);
    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/user/edit/:id" element={<UpdateUser />} />

        </Routes>
        </Router>
    );
};

export default App;
