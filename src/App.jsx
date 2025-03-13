import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginProvider } from './Contexts/LoginContext';
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';

function App() {
    return (
        <LoginProvider>
            <Router>
                <div>
                    <h1>Challenge #6</h1>
                    <h2>Fake Login</h2>
                    <p>Alejandro Solarte Gaitán</p>

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Home" element={<PrivateRoute component={Home} />} />
                    </Routes>
                </div>
            </Router>
        </LoginProvider>
    );
}

export default App;
