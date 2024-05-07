// Flora.jsx
import React, { useState } from 'react';
import Nav from '../components/Nav';
import './Flora.css'; // Import CSS file for Flora component styling

const Flora = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImages = Array.from(event.target.files);
    setImages(uploadedImages);
  };

  return (
    <div className="flora-container">
      <Nav />
      <div className="flora-content">
        <h1>Flora</h1>
        <div className="image-grid">
          {images.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`Image ${index}`} />
          ))}
        </div>
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
      </div>
    </div>
  );
};

export default Flora;
