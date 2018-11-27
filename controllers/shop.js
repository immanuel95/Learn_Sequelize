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
    .then(() => {
      res.redirect('/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.editProduct = (req, res) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;

  Product.findByPk(prodId)
    .then(product => {
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.imageUrl = updatedImageUrl;
      return product.save();
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
};

exports.deleteProduct = (req, res) => {
  const prodId = req.body.id;
  Product.findByPk(prodId)
    .then(product => {
      return product.destroy();
    })
    .then(result => {
      res.redirect('/products');
    })
    .catch(err => console.log(err));
};
