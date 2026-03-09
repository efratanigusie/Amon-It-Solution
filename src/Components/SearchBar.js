import { useState } from 'react';
import {
    faSearchengin,
  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = () => {
    const contents = [
        'Lorem ipsum dolor sit amet',
        'Consectetur adipiscing elit',
        'Sed do eiusmod tempor incididunt',
        'Ut labore et dolore magna aliqua',
        'Ut enim ad minim veniam',
        'Quis nostrud exercitation ullamco',
        'Laboris nisi ut aliquip ex ea commodo consequat',
        'Duis aute irure dolor in reprehenderit',
        'Voluptate velit esse cillum dolore eu fugiat',
        'Nulla pariatur excepteur sint occaecat cupidatat',
      ];
    const filtered = contents.filter((content) =>
      content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="hidden border border-gray-300 px-4 py-2 rounded-lg"
      />
      <button
        onClick={handleSearch}
        className="">
        <FontAwesomeIcon icon={faSearchengin}/>
      </button>

      <div className="mt-4">
        {/* Display the filtered results here */}
        {filteredResults.map((result, index) => (
          <p key={index}>{result}</p>
        ))}
      </div>
    </div>
  );
}

export default Search;