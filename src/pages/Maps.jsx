import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import './Maps.css'; // Import CSS file for styling

const Maps = () => {
  const [mapDataList, setMapDataList] = useState([]);
  const [currentMapData, setCurrentMapData] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);

  const handleSaveButtonClick = () => {
    if (currentMapData.trim() !== '' && imageFile) {
      const formData = new FormData();
      formData.append('content', currentMapData.trim());
      formData.append('image', imageFile);

      // Send data to the backend to create a new map
      createMap(formData)
        .then((newMapData) => {
          // Add the newly created map to the mapDataList
          setMapDataList([...mapDataList, newMapData]);
          // Clear the currentMapData input
          setCurrentMapData('');
          // Clear the image file
          setImageFile(null);
        })
        .catch((error) => console.error('Error creating map:', error));
    }
  };

  useEffect(() => {
    // Fetch all maps when the component mounts
    getAllMaps()
      .then((maps) => {
        // Update mapDataList with fetched maps
        setMapDataList(maps);
      })
      .catch((error) => console.error('Error fetching maps:', error));
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleRemoveButtonClick = (index) => {
    // Remove the map data at the specified index from the mapDataList array
    const updatedMapDataList = [...mapDataList];
    updatedMapDataList.splice(index, 1);
    setMapDataList(updatedMapDataList);
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
            {/* Button to remove the corresponding map data */}
            <button onClick={() => handleRemoveButtonClick(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;

function createMap(mapData) {
  return fetch('/maps', {
    method: 'POST',
    body: mapData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to create map');
    }
    return response.json();
  });
}

function getAllMaps() {
  return fetch('/maps')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch maps');
    }
    return response.json();
  });
}
