import React, { useState } from 'react';
import Nav from '../components/Nav';
import './Maps.css'; // Import CSS file for styling

const Maps = () => {
  const [mapDataList, setMapDataList] = useState([]);
  const [currentMapData, setCurrentMapData] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const handleSaveButtonClick = () => {
    if (currentMapData.trim() !== '' && imageFile) {
      // Construct a new object representing the map data including the image
      const newMapData = {
        content: currentMapData.trim(),
        image: URL.createObjectURL(imageFile) // Convert the image file to a data URL
      };

      // Add newMapData to mapDataList array
      setMapDataList([...mapDataList, newMapData]);

      // Clear the currentMapData input
      setCurrentMapData('');
      // Clear the image file
      setImageFile(null);
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
    <div>
      {/* Include the Nav component */}
      <Nav />
      <h1>Maps</h1>
      <div>
        {/* Input field to enter new map data */}
        <textarea value={currentMapData} onChange={(e) => setCurrentMapData(e.target.value)} />
        {/* Input field to upload image */}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {/* Button to save current map data */}
        <button onClick={handleSaveButtonClick}>Save</button>
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
