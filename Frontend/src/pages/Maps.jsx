import React, { useState } from 'react';
import Nav from '../components/Nav';
import './Maps.css'; // Import CSS file for styling

const Maps = () => {
  const [mapDataList, setMapDataList] = useState([]);
  const [currentMapData, setCurrentMapData] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveButtonClick = async () => {
    try {
      if (currentMapData.trim() !== '' && imageFile) {
        const formData = new FormData();
        formData.append('content', currentMapData.trim());
        formData.append('image', imageFile);

        const response = await fetch('/maps', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const newMapData = await response.json();
          setMapDataList([...mapDataList, newMapData]);
          setCurrentMapData('');
          setImageFile(null);
        } else {
          const errorData = await response.json();
          setErrorMessage(errorData.error);
        }
      } else {
        setErrorMessage('Please provide map data and an image.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle page navigation warning
  window.onbeforeunload = function () {
    return 'Are you sure you want to leave? Your changes may not be saved.';
  };

  // Handle click on image to toggle expanded view
  const handleImageClick = (index) => {
    setExpandedImageIndex(index === expandedImageIndex ? null : index);
  };

  return (
    <div className="map-page">
      {/* Include the Nav component */}
      <Nav />
      <h1>Maps</h1>
      <div>
        {/* Input field to enter new map data */}
        <textarea value={currentMapData} onChange={(e) => setCurrentMapData(e.target.value)} />
        {/* Input field to upload image */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {/* Button to save current map data */}
        <button onClick={handleSaveButtonClick}>Add</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
      <div className="map-container">
        {/* Display saved map datas in grid pattern */}
        {mapDataList.map((mapData, index) => (
          <div className="map-box" key={index}>
            <h3>Map {index + 1}</h3>
            <p>{mapData.content}</p>
            {/* Display uploaded image */}
            <img
              src={mapData.image}
              alt={`Map ${index + 1}`}
              className={expandedImageIndex === index ? 'expanded' : ''}
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
