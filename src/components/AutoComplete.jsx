import React from 'react'
import { useState,useEffect } from 'react'
const AutoComplete = () => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    // Dummy data for autocomplete suggestions
    const allSuggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Orange'];
    useEffect(() => {
      // Filter suggestions based on the input value
      const filteredSuggestions = allSuggestions.filter(
        suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    });
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
    return (
      <div className="autocomplete-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  
}

export default AutoComplete