import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarListing from './CarListing';
import CarDetails from './CarDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<CarListing />} />
                    <Route path="/details/:id" element={<CarDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
