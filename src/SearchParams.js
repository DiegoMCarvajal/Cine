import {useState, usestate} from 'react';

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location 
          <input id="location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );    
};
export default SearchParams;
