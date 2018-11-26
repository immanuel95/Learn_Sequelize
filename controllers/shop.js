const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.findAll()
    .then(products => {
      res.send(products);
    })
    .catch(err => console.log(err));
};

exports.addProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl
  })
    .then(result => {
      console.log('add product success');
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};
