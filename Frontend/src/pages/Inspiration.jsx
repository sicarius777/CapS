import React, { useState, useEffect } from 'react';
import './Inspirations.css'; // Import custom CSS file for styles
import backgroundImage from './WM.jpg'; // Import background image
import Nav from '../components/Nav'; // Import Navbar component

const InspirationPage = () => {
  const [quote, setQuote] = useState(null);
  const [newLinkName, setNewLinkName] = useState('');
  const [newLinkUrl, setNewLinkUrl] = useState('');
  const [appendixNLinks, setAppendixNLinks] = useState(
    JSON.parse(localStorage.getItem('appendixNLinks')) || [
      { name: 'What is Appendix N', url: 'https://goodman-games.com/blog/2018/03/26/what-is-appendix-n/' },
      { name: 'The Dying Earth', url: 'https://littleredreviewer.wordpress.com/2012/01/03/the-dying-earth-by-jack-vance/' },
      { name: 'Stormlight Archive', url: 'https://roshar.17thshard.com/#/en-US/locations/frostlands' },
      { name: 'Kings of the Wyld', url: 'https://en.wikipedia.org/wiki/Kings_of_the_Wyld' }
    ]
  );
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch('/api/quotes/random');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data = await response.json();
        setQuote(data.data[0]); // Extracting the first quote from the response
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchRandomQuote();
    } , []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (unsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // This text will be shown in the confirmation dialog
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [unsavedChanges]);

  const handleNameChange = (event) => {
    setNewLinkName(event.target.value);
    setUnsavedChanges(true);
  };

  const handleUrlChange = (event) => {
    setNewLinkUrl(event.target.value);
    setUnsavedChanges(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newLink = { name: newLinkName, url: newLinkUrl };
    setAppendixNLinks([...appendixNLinks, newLink]);
    setNewLinkName('');
    setNewLinkUrl('');
    setUnsavedChanges(false);
  };

  const handleSave = () => {
    localStorage.setItem('appendixNLinks', JSON.stringify(appendixNLinks));
    setUnsavedChanges(false);
  };

  return (
    <div>
      <Nav />

      <div className="inspiration-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Appendix N column */}
        <div className="appendix-n">
          <h2>Appendix N</h2>
          <ul>
            {appendixNLinks.map((resource, index) => (
              <li key={index}>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Form to add new link */}
          <form onSubmit={handleSubmit}>
            <input type="text" value={newLinkName} onChange={handleNameChange} placeholder="Enter name" />
            <input type="text" value={newLinkUrl} onChange={handleUrlChange} placeholder="Enter URL" />
            <button type="submit">Add Link</button>
          </form>
          {/* Save button */}
          <button onClick={handleSave} disabled={!unsavedChanges}>Save</button>
        </div>

        {/* Quote section */}
        <div className="quote-section">
          <h1>Inspiration</h1>
          {quote ? (
            <div className="quote-container">
              <blockquote className="blockquote">{quote.quoteText}</blockquote>
              <p className="author">- {quote.quoteAuthor}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InspirationPage;
