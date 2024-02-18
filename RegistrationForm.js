// src/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        source: '',
        destination: '',
        isBusinessClass: false,
        gender: 'male',
        email: '',
        phone: '',
        // Add more form fields as needed
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validation logic for each field
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!formData.source.trim()) {
            newErrors.source = 'Source is required';
        }

        if (!formData.destination.trim()) {
            newErrors.destination = 'Destination is required';
        }

        if (!formData.gender) {
            newErrors.gender = 'Please select a gender';
        }
        if (!formData.isClass) {
            newErrors.gender = 'Please select a Class';
        }



        // Validation for email
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        // Validation for phone number
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number';
        }

        // Add more validation logic as needed

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Form is valid if there are no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <div className="error">{errors.firstName}</div>
            </label>

            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <div className="error">{errors.lastName}</div>
            </label>

            <label>
                Source:
                <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                />
                <div className="error">{errors.source}</div>
            </label>

            <label>
                Destination:
                <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                />
                <div className="error">{errors.destination}</div>
            </label>

            {/* Example radio button */}
            <label>
                Gender:
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                    />
                    <span>Male</span>
                </div>
                <div>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                    />
                    <span>Female</span>
                </div>
                <div className="error">{errors.gender}</div>
            </label>

            {/* Example checkbox */}
            <label>
                Business Class:
                <div>
                    <input
                        type='radio'
                        value="business"
                        name="isClass"
                        onChange={handleChange}
                    />
                    <span>Businessclass</span>

                </div>

                <div>
                    <input
                        type='radio'
                        value='economy'
                        name="isClass"
                        onChange={handleChange}
                    />
                    <span>Economy</span>

                </div>
                <div className="error">{errors.isClass}</div>

            </label>
            

            {/* Additional form fields */}
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div className="error">{errors.email}</div>
            </label>

            <label>
                Phone:
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div className="error">{errors.phone}</div>
            </label>

            {/* Other form fields and submit button */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;
