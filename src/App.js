import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/login/Login';
import ErrorPage from './pages/ErrorPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
  )
}
