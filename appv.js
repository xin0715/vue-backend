export default function handler(req, res) {
    const banners = {
        result: [
            { id: 1, imgUrl: 'banner3.jpg' },
            { id: 2, imgUrl: 'banner2.jpg' }
        ]
    };
    const products = {
        result: [
            { id: 101, name: 'Product 1' },
            { id: 102, name: 'Product 2' }
        ]
    };

    const { category } = req.query;

    if (category === 'banner') {
        res.status(200).json(banners); // 返回 banner 数据
    } else if (category === 'products') {
        res.status(200).json(products); // 返回 products 数据
    } else {
        res.status(404).json({ message: 'Category not found' }); // 如果没有匹配的 category，返回 404
    }
}
