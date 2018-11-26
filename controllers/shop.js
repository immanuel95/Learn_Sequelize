const Product = require('../models/product');

exports.getProducts = (req, res) => {
  Product.findAll()
    .then(products => {
      res.send(products);
    })
    .catch(err => console.log(err));
};

exports.addProduct = (req, res) => {
  Product.create({
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};
