// src/App.js
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import Confirmation from './Confirmation';

const App = () => {
  const [passengers, setPassengers] = useState([]);
  const [totalFare, setTotalFare] = useState(0);

  const handleRegistration = (formData) => {
    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.source || !formData.destination) {
      alert('Please fill in all required fields.');
      return;
    }

    // Calculate total fare (you can add your own logic here)
    const baseFare = 100; // Replace with your own fare calculation logic
    const passengerFare = baseFare; // Replace with your own fare calculation logic
    const newTotalFare = totalFare + passengerFare;

    // Update passengers state
    setPassengers([...passengers, formData]);

    // Update totalFare state
    setTotalFare(newTotalFare);
  };

  return (
    <div>
      <h1>Airline Reservation System</h1>
      {passengers.length === 0 ? (
        <RegistrationForm onSubmit={handleRegistration} />
      ) : (
        <Confirmation passengers={passengers} totalFare={totalFare} />
      )}
    </div>
  );
};

export default App;
