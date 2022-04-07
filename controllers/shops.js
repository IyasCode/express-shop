const ProductModel = require('../models/product');
const CartModel = require('../models/cart') ;

const genarateId = require('../helper/genarateId');

exports.getShopsIndex = (req, res, next) => {
  res.render('shops/index', {
    pageTitle: 'Home'
  });
}

exports.getShopsRedirect = (req, res, next) => {
  res.redirect('/home');
}

exports.getShopsProducts = (req, res, next) => {
  ProductModel.getAll((products) => {
      res.render('shops/products', {
        pageTitle: 'Products',
        products: products
      })
  })
}

exports.getShopsMyCart = (req, res, next) => {
  CartModel.getAll((products) => {
    res.render('shops/my-cart', {
      pageTitle: 'My Cart',
      products: products,
      totalPrice: CartModel.getTotalPrice()
    });
  })
}

exports.postShopsMyCart = (req, res, next) => {
  const productId = req.params.productId;
  const cartId = genarateId(25);
  
  const Cart = new CartModel(cartId);
  
  Cart.addProduct(productId)
  
  res.redirect('/my-cart');
}

exports.postShopsMyCartDelete = (req, res, next) => {
 CartModel.deleteProduct(req.body.cartId);
 
 res.redirect('/my-cart');
}


exports.getShopsProductDetail = (req, res, next) => {
  const productId = req.params.productId;
  ProductModel.getProduct(productId, (product) => {
    res.render('shops/product-detail', {
      pageTitle: 'Product detail',
      product: product
    })
  })
}
