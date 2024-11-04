const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Sử dụng CORS để cho phép frontend truy cập
app.use(cors());

// Giả định dữ liệu sản phẩm trong file products.json
const productsData = require('./products.json');

// Định nghĩa route cho API
app.get('/api/products', (req, res) => {
  res.json(productsData);
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
