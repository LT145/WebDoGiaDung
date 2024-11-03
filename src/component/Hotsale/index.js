import React, { useState } from 'react';
import './Hotsale.css';

const images = {
  image1: require('./img/aqua-88-kg.jpg'),
  image2: require('./img/may-loc-nuoc-ro-nong-lanh.jpg'),
  image3: require('./img/smart-tivi-samsung-4k-crystal.jpg'),
  image4: require('./img/midea.jpg'),
};

const Hotsale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 8+2; // Total number of boxes

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

  const boxes = [
    {
      sale: 'Giảm 35%',
      img: images.image1,
      name: 'Aqua 8.8 Kg AQW-FR88GT.BK',
      price1: '5.190.000 đ',
      price2: '8.090.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image2,
      name: 'Máy lọc nước RO nóng nguội lạnh Sunhouse UltraPURE SHA76222KL 11 lõi',
      price1: '6.590.000 đ',
      price2: '10.590.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image3,
      name: 'Samsung Smart TV UA70DU7000',
      price1: '14.900.000 đ',
      price2: '24.990.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image4,
      name: 'Máy hút bụi cầm tay Midea MVC-SC861B',
      price1: '690.000 đ',
      price2: '1.090.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image1,
      name: 'Aqua 8.8 Kg AQW-FR88GT.BK',
      price1: '5.190.000 đ',
      price2: '8.090.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image2,
      name: 'Máy lọc nước RO nóng nguội lạnh Sunhouse UltraPURE SHA76222KL 11 lõi',
      price1: '6.590.000 đ',
      price2: '10.590.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image3,
      name: 'Samsung Smart TV UA70DU7000',
      price1: '14.900.000 đ',
      price2: '24.990.000 đ',
    },
    {
      sale: 'Giảm 35%',
      img: images.image4,
      name: 'Máy hút bụi cầm tay Midea MVC-SC861B',
      price1: '690.000 đ',
      price2: '1.090.000 đ',
    },
  ];

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
          {boxes.map((item, index) => (
            <div className="box" key={index}>
              <div className="sale">{item.sale}</div>
              <img src={item.img} alt={item.name} />
              <a href="#" className="name">
                {item.name}
              </a>
              <div className="money_sale">
                <p className="gia_1">{item.price1}</p>
                <p className="gia_2">{item.price2}</p>
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
