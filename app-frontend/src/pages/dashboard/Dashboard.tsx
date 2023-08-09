import React from 'react';
import Edit from '../pages/user/Edit';

function Dashboard({ user }) {
  const [Edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    console.log('Updated profile:', updatedProfile);
    setEditing(false);
  };

    return (
      <div>
       <h1>Welcome, {user.firstname} {user.lastname}!</h1>
       <p>Email: {user.email}</p>
       {editing ? (
       <Edit user={user} onSave={handleSaveProfile} />
       ) : (
          <button onClick={handleEdit}>Edit</button>
       )}
      </div> 
	);
}

export default Dashboard;