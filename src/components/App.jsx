import React, { useState } from 'react';
import Searchbar from './Searchbar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const defaultGifs = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];

const App = () => {
  // const [gifSelected, setGifSelected] = useState("WuGSL4LFUMQU");
  const [gifSelected, setGifSelected] = useState(defaultGifs[0]);
  // const [idList, setidList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  const [idList, setidList] = useState(defaultGifs);

  const fetchGiphy = (keyword) => {
    if (keyword.trim() === '') {
      setidList(defaultGifs);
    } else {
      giphy.search({
        q: keyword,
        rating: 'g',
        limit: 10
      }, (err, res) => {
        setidList(res.data.map((gif) => gif.id));
      });
    }
  };
  const changeSelectGif = (newSelectedGifId) => {
    setGifSelected(newSelectedGifId);
  };

  return (
    <div>
      <div className="left-scene">
        <Searchbar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif id={gifSelected} />
        </div>
      </div>
      <div className="right-scene">
        <GifList idList={idList} changeSelectGif={changeSelectGif} />
      </div>
    </div>
  );
};

export default App;
