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
    req.body.urlImage,
    req.body.detail
    );
  
  product.save();
  
  res.redirect('/products');
}

exports.getAdminsAddProduct = (req, res, next) => {
  res.render('admins/add-product', {
    pageTitle: 'Add Product'
  })
}

exports.postAdminsEditProduct = (req, res, next) => {
  ProductModel.getAll((products) => {
    res.render('admins/edit-product', {
      pageTitle: 'Edit product',
      product: products.find(prod => prod.id === req.body.productId)
    })
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

exports.postAdminsDeleteProduct = (req, res, next) => {
  console.log(req.body);
  
  ProductModel.deleteProduct(req.body.productId);
  
  res.redirect('/admins/all-products');
}
