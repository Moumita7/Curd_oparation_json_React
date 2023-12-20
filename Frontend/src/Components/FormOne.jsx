

import { useState, useEffect } from 'react';
import axios from 'axios';

const FormOne = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    hobbies: [],
    education: [],
  });

  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    // Fetch your existing users from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3006/details');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedHobbies = checked
        // ? [...formData.hobbies, value]
        // : formData.hobbies.filter((hobby) => hobby !== value);
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);

      setFormData({
        ...formData,
        // hobbies: updatedHobbies,
        [name]: updatedHobbies,

      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingUserId !== null) {
        // If editing, update the existing user
        await axios.put(`http://localhost:3006/details/${editingUserId}`, formData);
      } else {
        // If not editing, create a new user
        await axios.post('http://localhost:3006/details', formData);
      }

      // Reset form data after submission
      setFormData({
        name: '',
        email: '',
        gender: 'male',
        hobbies: [],
        education: [],
      });

      // Reset editingUserId after submission
      setEditingUserId(null);

      // Fetch updated user list
      const response = await axios.get('http://localhost:3006/details');
      setUsers(response.data);

      console.log('Data submitted successfully');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleEdit = (userId) => {
    // Find the user by ID and set the form data for editing
    const userToEdit = users.find((user) => user.id === userId);

    if (userToEdit) {
      setFormData({
        name: userToEdit.name,
        email: userToEdit.email,
        gender: userToEdit.gender,
        hobbies: userToEdit.hobbies,
        education:userToEdit.education
      });

      // Set the editingUserId
      setEditingUserId(userId);
    }
  };

  const handleDelete = async (userId) => {
    try {
      // Delete the user by ID
      await axios.delete(`https://example.com/api/users/${userId}`);

      // Fetch updated user list
      const response = await axios.get('https://example.com/api/users');
      setUsers(response.data);

      console.log('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
  
      <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <br />

      <label>
        Gender:
        <label>
          Male
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Female
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleInputChange}
          />
        </label>
      </label>
      <br />

      <label>
        Hobbies:
        <label>
          Dance
          <input
            type="checkbox"
            name="hobbies"
            value="dance"
            checked={formData.hobbies.includes('dance')}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Drawing
          <input
            type="checkbox"
            name="hobbies"
            value="drawing"
            checked={formData.hobbies.includes('drawing')}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Painting
          <input
            type="checkbox"
            name="hobbies"
            value="painting"
            checked={formData.hobbies.includes('painting')}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Development
          <input
            type="checkbox"
            name="hobbies"
            value="development"
            checked={formData.hobbies.includes('development')}
            onChange={handleInputChange}
          />
        </label>
      </label>

      <br/>
      <label>
        education:
        <label>
          ba
          <input
            type="checkbox"
            name="education"
            value="ba"
            checked={formData.education.includes('ba')}
            onChange={handleInputChange}
          />
        </label>
        <label>
          bca
          <input
            type="checkbox"
            name="education"
            value="bca"
            checked={formData.education.includes('bca')}
            onChange={handleInputChange}
          />
        </label>
    
        <label>
          mca
          <input
            type="checkbox"
            name="education"
            value="mca"
            checked={formData.education.includes('mca')}
            onChange={handleInputChange}
          />
        </label>
   
      </label>
      <br />

        <button type="submit">{editingUserId !== null ? 'Update' : 'Submit'}</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* {user.name} - {user.email} - {user.gender} - Hobbies: {user.hobbies.join(', ')} - Education : {user.education.join(', ')} */}
            {user.name} - {user.email} - {user.gender} - Hobbies: {user.hobbies.join(', ')} -Education: {user.hobbies.join(', ')}

            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormOne