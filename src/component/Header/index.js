import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from './img/logo.png'; // Ensure the path is correct

const Nav = () => {
  return (
    <div id="header">
  <div className="menu">
    <div className="logo_menu">
      <img src={logo} alt="" />
    </div>
    <div id="location">
      <div className="icon_location">
        <i className="fa-solid fa-location-dot" />
        <p>
          Giá xem tại <br /> Hồ Chí Minh
        </p>
        <i className="fa-solid fa-chevron-down" />
      </div>
    </div>
    <div className="search">
      <input
        style={{ textAlign: "center" }}
        className="btn_search"
        type="search"
        placeholder="Bạn cần tìm sản phẩm gì?"
      />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
    <div id="Phone">
      <div className="icon_phone">
        <i
          className="fa-solid fa-phone"
          style={{ color: "white", fontSize: 25 }}
        />
      </div>
      <div className="SDT">
        <p>
          Gọi mua hàng <br /> 18003638
        </p>
      </div>
    </div>
    <div id="Truck">
      <div className="icon_Truck">
        <i
          className="fa-solid fa-truck-fast"
          style={{ color: "white", fontSize: 25 }}
        />
      </div>
      <div className="Check">
        <p>
          Tra cứu <br /> đơn hàng
        </p>
      </div>
    </div>
    <div id="Bag">
      <div className="icon_Bag">
        <i
          className="fa-solid fa-bag-shopping"
          style={{ color: "white", fontSize: 25 }}
        />
      </div>
      <div className="Bag_text">
        <p>Giỏ hàng</p>
      </div>
    </div>
    <div id="user">
      <div className="icon_user">
        <i
          className="fa-solid fa-user"
          style={{ color: "white", fontSize: 20 }}
        />
        <p>Đăng nhập</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Nav;
