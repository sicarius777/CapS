import React, { useState } from 'react';
import Nav from '../components/Nav';
import WorldGenerator from '../components/WorldGenerator';
import './Maps.css'; // Import CSS file for styling

const Maps = () => {
  const [mapDataList, setMapDataList] = useState([]);
  const [currentMapData, setCurrentMapData] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [worldId, setWorldId] = useState('');

  const handleGenerateWorldId = (newWorldId) => {
    setWorldId(newWorldId); // Set the generated world_id in state
  };

  const handleSaveButtonClick = async () => {
    try {
      if (currentMapData.trim() !== '' && imageFile) {
        const formData = new FormData();
        formData.append('content', currentMapData.trim());
        formData.append('image', imageFile);

        const response = await fetch('http://127.0.0.1:5000/maps', {
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
            <img src={mapData.image} alt={`Map ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* Render the WorldGenerator component to generate a world_id */}
      <WorldGenerator onGenerate={handleGenerateWorldId} />
    </div>
  );
};

export default Maps;