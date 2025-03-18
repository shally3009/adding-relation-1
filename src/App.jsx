import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes, Route from react-router-dom
import DestinationContainer from './components/DestinationContainer'; // We want to display this by default

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DestinationContainer />} />
      </Routes>
    </Router>
  );
}

export default App;