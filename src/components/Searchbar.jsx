import React from 'react';

const Searchbar = (props) => {
  const { fetchGiphy } = props;
  const handleChange = (event) => {
    fetchGiphy(event.currentTarget.value);
  };
  return (
    <div>
      <input type="text" className="form-search form-control" placeholder="Type something..." onChange={handleChange} />
    </div>
  );
};

export default Searchbar;
