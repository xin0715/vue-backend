const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// 啟用 CORS 支持
app.use(cors());

// 根路由處理
app.get('/', (req, res) => {
    res.send('Hello World!'); // 或者返回 HTML 內容
});

// API 路由
const banners = { result: [{ id: 1, imgUrl: 'banner1.jpg' }, { id: 2, imgUrl: 'banner2.jpg' }] };
const products = { result: [{ id: 101, name: 'Product 1' }, { id: 102, name: 'Product 2' }] };

// 根據參數返回不同的數據
app.get('/api/:category', (req, res) => {
    const category = req.params.category;

    if (category === 'banner') {
        res.json(banners); // 返回 banner 數據
    } else if (category === 'products') {
        res.json(products); // 返回 products 數據
    } else {
        res.status(404).json({ message: 'Category not found' }); // 如果沒有匹配的 category，返回 404
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//如果想只允許特定來源（例如 GitHub Pages 的 URL），可以這樣配置
// const corsOptions = {
//     origin: 'https://your-username.github.io',  // 只允許這個域名的請求
// };
// app.use(cors(corsOptions));
