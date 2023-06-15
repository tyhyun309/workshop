import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { idList, changeSelectGif } = props;
  return (
    <div className="gif-list">
      { idList.map(
        (id) => <Gif id={id} key={id} changeSelectGif={changeSelectGif} />
      )}
    </div>
  );
};

export default GifList;
