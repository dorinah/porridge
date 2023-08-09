import React, { useState } from 'react';

function Edit({ user, onSave }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data using an API call or other methods
    if (password !== password_confirmation) {
      alert("Passwords don't match.");
      return;
    }
    onSave({ firstName, lastName, email, password });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-control"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </label>
        <br />
        <label>
         Password:
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="form-control"
          />
        </label>
        <label>
         password_confirmation:
         <input
           type="password"
           value={password_confirmation}
           onChange={(e) => setPassword_confirmation(e.target.value)}
           className="form-control"
          />
        </label>   
        <button className="btn btn-primary" type="submit">Save</button>
      </form>
    </div>
  );
}

export default Edit;
