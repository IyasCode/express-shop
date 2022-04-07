const fs = require('fs');
const path = require('path');

const datasPath = path.join(
  path.dirname(process.mainModule.filename),
  'datas'
  )
  
const cartPath = path.join(datasPath, 'cart.json');
const productsPath = path.join(datasPath, 'products.json');

module.exports = class Cart {
  constructor(cartId) {
    this.cartId = cartId
    this.products = [];
    this.totalPrice;
  }
  
  addProduct(productId) {
    const allProducts = JSON.parse(fs.readFileSync(productsPath));
    const product = allProducts.find((prod) => {
      return prod.id === productId
    });
    
    product.cartId = this.cartId
    
    fs.readFile(cartPath, (err, data) => {
      if(!err) {
        this.products = JSON.parse(data);
      }
      
      this.products.push(product);
      
      fs.writeFile(cartPath, JSON.stringify(this.products), (err) => {
        console.log(err);
      })
    })
  }
  
  static deleteProduct(cartId) {
    this.products = JSON.parse(fs.readFileSync(cartPath));
  
    
    const productIndex = this.products.findIndex((prod, index) => {
      return prod.cartId === cartId
    })
    
    const newCart = this.products.splice(productIndex, 1);
    
    fs.writeFile(cartPath, JSON.stringify(this.products), (err) => {
      console.log(err);
    })
    
  }
  
  static getAll(callback) {
    fs.readFile(cartPath, (err, data) => {
      if (err) {
        casllback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }
  
  static getTotalPrice() {
    const cartProducts = JSON.parse(fs.readFileSync(cartPath));
    
    this.totalPrice = 0;
    
    cartProducts.forEach((prod) =>  {
      this.totalPrice += +prod.price
    })
    
    return this.totalPrice.toFixed(2);
  }
  
}
 
