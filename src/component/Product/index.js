import React, { useState } from 'react';
import './Product.css';

const images = {
    image1: require('./img/noi-chien-khong-dau-philips-na130-00-6-2-lit.jpg'),
    image2: require('./img/noi-com-dien-tu-sunhouse-18-lit.jpg'),
    image3: require('./img/panasonic-nr-ba190ppvn.jpg'),
  };
function ProductTable(){
    const products = [
        {
          id: 1,
          sale: "Giảm 40%",
          imgSrc: images.image1,
          name: "Nồi cơm điện tử Sunhouse 1.8 lít SHD8911",
          priceOld: "1.990.000 đ",
          priceNew: "1.190.000 đ",
          rating: 4.5,
        },
        {
          id: 2,
          sale: "Giảm 26%",
          imgSrc: images.image1,
          name: "Panasonic Inverter 170 lít NR-BA190PPVN",
          priceOld: "6.790.000 đ",
          priceNew: "4.990.000 đ",
          rating: 4.5,
        },
        {
          id: 3,
          sale: "Giảm 24%",
          imgSrc: images.image1,
          name: "Nồi chiên không dầu Philips NA130/00 6.2 lít",
          priceOld: "2.090.000 đ",
          priceNew: "1.590.000 đ",
          rating: 5,
        },
        {
          id: 4,
          sale: "Giảm 41%",
          imgSrc: images.image1,
          name: "Máy lọc nước RO nóng nguội lạnh Hòa Phát HPN666",
          priceOld: "10.870.000 đ",
          priceNew: "6.390.000 đ",
          rating: 4.5,
        },
        {
          id: 5,
          sale: "Giảm 8%",
          imgSrc: images.image1,
          name: "Toshiba Inverter 8.5 Kg TW-BH95S2V WK",
          priceOld: "6.990.000 đ",
          priceNew: "6.390.000 đ",
          rating: 4.5,
        },
        {
          id: 6,
          sale: "Giảm 51%",
          imgSrc: images.image1,
          name: "Toshiba Inverter 8.5 Kg TW-BH95S2V WK",
          priceOld: "2.050.000 đ",
          priceNew: "990.000 đ",
          rating: 5,
        },
        {
            id: 7,
            sale: "Giảm 51%",
            imgSrc: images.image1,
            name: "Toshiba Inverter 8.5 Kg TW-BH95S2V WK",
            priceOld: "2.050.000 đ",
            priceNew: "990.000 đ",
            rating: 5,
          },
        // Thêm các sản phẩm khác tương tự...
      ];
      

  return (
    <div className="product_container">
  <h3>Gợi ý sản phẩm</h3>
  <div className="product_row">
    {products.map((product) => (
      <div className="product_box" key={product.id}>
        <div className="sale">{product.sale}</div>
        <img src={product.imgSrc} alt={product.name} />
        <a href="#" className="name">{product.name}</a>
        <div className="money_sale">
          <p className="gia_1">{product.priceNew}</p>
          <p className="gia_2">{product.priceOld}</p>
        </div>
        <div className="star">
          {Array.from({ length: 4 }, (v, i) => (
            <i key={i} className={`fa-solid fa-star${i < Math.floor(product.rating) ? '' : '-half-stroke'}`} />
          ))}
        </div>
        <a href="#" className="buy">Mua Ngay</a>
      </div>
    ))}
  </div>
</div>

  );
}

export default ProductTable;