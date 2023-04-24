import React, { useState } from 'react';
import AdContainer from '../AdContainer';
import SearchBar from '../SearchBar';
import {ads} from '../../data';

const Homepage = ()=> {
    const [adss, setAdss] = useState(ads)
    const handleSearch = (value) => {
        filterAds(value);
    };
    const filterAds = (keyword) => {
        const filteredData = ads.filter((obj) => {
        return Object.values(obj).some((value) =>
            value.toString().toLowerCase().includes(keyword.toLowerCase())
        );
        });
        setAdss(filteredData)
    }
  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
      <AdContainer ads={adss} />
    </div>
  );
}

export default Homepage;
