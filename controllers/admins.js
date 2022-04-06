const ProductModel = require('../models/product');

const genarateId = require('../helper/genarateId');

exports.getAdminsIndex = (req, res, next) => {
  res.render('admins/index', {
    pageTitle: 'Admin'
  })
}

exports.postAdminsIndex = (req, res, next) => {
  console.log(req.body);
  const newId = genarateId(20);
  const product = new ProductModel(
    newId,
    req.body.name,
    req.body.price,
    req.body.urlImage
    );
  
  product.save();
  
  res.redirect('/products');
}

exports.getAdminsAddProduct = (req, res, next) => {
  res.render('admins/add-product', {
    pageTitle: 'Add Product'
  })
}

exports.getAdminsEditProduct = (req, res, next) => {
  res.render('admins/edit-product', {
    pageTitle: 'Edit product'
  })
}

exports.getAdminsAllProducts = (req, res, next) => {
  ProductModel.getAll((products) => {
    res.render('admins/all-products', {
      pageTitle: 'All products',
      products: products
    })
  })
}
