// src/Confirmation.js
import React from 'react';

const Confirmation = ({ passengers, totalFare }) => {
    console.log(passengers)
    return (
        <div>
            <h2>Registration done successfully!</h2>
            <h3>Passenger Information:</h3>

            {passengers.map((passenger, index) => (
                <div key={index}>
                    <h4>Passenger {index + 1}</h4>
                    <p>First Name: {passenger.firstName}</p>
                    <p>Last Name: {passenger.lastName}</p>
                    <p>Source: {passenger.source}</p>
                    <p>Destination: {passenger.destination}</p>
                    <p>class: {passenger.isBusinessClass ? 'Business class' : 'Economy class'}</p>

                    {/* Add other passenger details here */}
                </div>
            ))}

            <p>Total Fare: {totalFare}</p>
        </div>
    );
};

export default Confirmation;
