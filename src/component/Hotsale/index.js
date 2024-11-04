import React, { useState, useEffect } from 'react';
import './Hotsale.css';
import hotsaleData from './Hotsales.json'; // Import file JSON

const Hotsale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = hotsaleData.length; // Lấy số lượng sản phẩm từ JSON

  // Fixed width for each box
  const boxWidth = 250; // Width of each box in pixels
  const marginInPixels = 15; // Margin between items in pixels
  const itemsPerSlide = Math.floor((window.innerWidth - 20) / (boxWidth + marginInPixels * 2)); // Calculate how many boxes fit in the viewport

  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerSlide) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  // Hàm tính phần trăm giảm giá
  const calculateSale = (priceOld, priceNew) => {
    // Chuyển đổi giá từ định dạng "X.XXX.XXX đ" sang số nguyên
    const oldPrice = parseInt(priceOld.replace(/\./g, '').replace(' đ', ''));
    const newPrice = parseInt(priceNew.replace(/\./g, '').replace(' đ', ''));
    const discount = ((oldPrice - newPrice) / oldPrice) * 100;
    return `Giảm ${Math.round(discount)}%`;
  };

  return (
    <div id="hot_sale">
      <div className="fire">
        <i className="fa-solid fa-fire" />
        <h2>HOT SALE</h2>
      </div>
      <div className="body_box">
        <div
          className="box_container"
          style={{ transform: `translateX(-${(currentIndex * (boxWidth + marginInPixels))}px)` }}
        >
          {hotsaleData.map((item, index) => (
            <div className="box" key={index}>
              <div className="sale">{calculateSale(item.priceOld, item.priceNew)}</div>
              <img src={require(`${item.imgSrc}`)} alt={item.name} />
              <a href="#" className="name">
                {item.name}
              </a>
              <div className="money_sale">
                <p className="gia_1">{item.priceNew}</p>
                <p className="gia_2">{item.priceOld}</p>
              </div>
              <div className="star">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star-half-stroke" />
              </div>
              <a href="#" className="buy">Mua Ngay</a>
            </div>
          ))}
        </div>
      </div>
      <div className="chevron">
        <i className="fa-solid arrow fa-chevron-left" onClick={previousSlide} />
        <i className="fa-solid arrow fa-chevron-right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Hotsale;
