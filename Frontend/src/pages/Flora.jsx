// Flora.jsx

import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import './Flora.css'; // Import CSS file for Flora component styling

const Flora = () => {
  const [images, setImages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Function to fetch current user ID from the backend
  const fetchCurrentUser = async () => {
    try {
      const response = await fetch('/api/current_user');
      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.user_id);
      } else {
        setCurrentUser(null);
      }
    } catch (error) {
      console.error('Error fetching current user:', error);
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []); // Fetch current user ID when component mounts

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
    setDescriptions((prevDescriptions) => [
      ...prevDescriptions,
      ...Array(uploadedImages.length).fill(''),
    ]);
  };

  // Function to handle description input change
  const handleDescriptionChange = (index, event) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = event.target.value;
    setDescriptions(newDescriptions);
  };

  // Function to save flora data to the backend
  const saveFloraData = async () => {
    try {
      const formData = new FormData();
      images.forEach((image, index) => {
        formData.append('images', image);
        formData.append('descriptions', descriptions[index]);
      });
      formData.append('user_id', currentUser);

      const response = await fetch('/flora', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Flora data saved successfully');
        // Optionally, you can reset the state or show a success message
      } else {
        console.error('Failed to save flora data:', response.statusText);
        // Handle error or show error message to user
      }
    } catch (error) {
      console.error('Error saving flora data:', error);
      // Handle error or show error message to user
    }
  };

  return (
    <div className="flora-container">
      <Nav />
      <div className="flora-content">
        <h1>Flora</h1>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-box">
              <img src={URL.createObjectURL(image)} alt={`Image ${index}`} />
              <textarea
                value={descriptions[index]}
                onChange={(event) => handleDescriptionChange(index, event)}
                placeholder="Enter description..."
              />
            </div>
          ))}
        </div>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <button onClick={saveFloraData}>Save</button>
      </div>
    </div>
  );
};

export default Flora;
