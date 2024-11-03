import React from 'react';
import './Banner.css';
import banner1 from './img/banner1.png';
import banner2 from './img/banner2.png';

const Banner2 = () => {
  return (
        <div className="banner2">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        </div>
  );
}

export default Banner2;
