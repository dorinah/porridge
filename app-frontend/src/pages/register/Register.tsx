import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://your-symfony-backend-url/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, handle success here
        console.log('Registration successful!');
      } else {
        // Registration failed, handle error here
        console.log('Registration failed. Please check your inputs.');
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };
   
  return (
    <div class="card">
      <div class="card-body bg-light">
        <h4 class="card-title">RegistrationForm</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                 First Name:
              </label>
               <input
                 type="text"
                 className="form-control"
                 id="firstName"
                 name="firstName"
                 value={formData.firstName}
                 onChange={handleChange}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                 Last Name:
              </label>
               <input
                 type="text"
                 className="form-control"
                 id="lastName"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleChange}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                 Email:
              </label>
                <input
                  type="email"
                  className="form-control"
                 id="email"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                 Password:
              </label>
                <input
                 type="password"
                 className="form-control"
                 id="password"
                 name="password"
                 value={formData.password}
                 onChange={handleChange}
                />
            </div>
            <div className="mb-3">
              <label htmlFor="password_confirmation" className="form-label">
                  Password_confirmation:
              </label>
                <input
                  type="password"
                  className="form-control"
                  id="password_confirmation"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />
            </div>      

      <button type="submit" className="btn btn-primary">
        Register
      </button>
            </form>
          
        </div>
      </div>
  );
};

export default RegistrationForm;
