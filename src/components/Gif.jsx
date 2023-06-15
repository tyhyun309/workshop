import React from 'react';

const Gif = (props) => {
  const { id, changeSelectGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;
  const handleClick = () => {
    changeSelectGif(id);
  };
  return (
    <div>
      <img src={url} alt="gif" className="gif" onClick={handleClick}/>
    </div>
  );
};

export default Gif;
