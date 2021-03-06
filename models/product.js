const fs = require('fs');
const path = require('path');

const productsPath = path.join(
  path.dirname(process.mainModule.filename),
  'datas',
  'products.json'
  )

module.exports = class Product {
  constructor(id, name, price, urlImage, detail) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.urlImage = urlImage;
    this.detail = detail;
  }
  
  save() {
    let productsDatas = []
    
    fs.readFile(productsPath, (err, data) => {
      if (!err) {
        productsDatas = JSON.parse(data);
      }
      
      productsDatas.push(this);
      
      fs.writeFile(productsPath, JSON.stringify(productsDatas), (err) => {
        if (err) {
          console.log("product model write file", err);
        }
      })
    })
  }
  
  static getAll(callback) {
    fs.readFile(productsPath, (err, data) => {
      if (err) {
        casllback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }
  
  static getProduct(productId, callback) {
    fs.readFile(productsPath, (err, data) => {
    let products;
    let product;
      if (err) {
        products = [];
      } else {
        products = JSON.parse(data);
        
        product = products.find((prod) => {
          return prod.id === productId
        })
      }
      
      callback(product);
    })
  }
  
  static editProduct(productId, name, price, urlImage, detail) {
    const allProducts = JSON.parse(fs.readFileSync(productsPath));
      
    allProducts.find(prod => {
      if (prod.id === productId) {
        prod.name = name;
        prod.price = price;
        prod.urlImage = urlImage;
        prod.detail = detail;
      }
    })
    
    fs.writeFile(productsPath, JSON.stringify(allProducts), (err) => {
      console.log(err);
    })
  }
  
  static deleteProduct(productId) {
    const allProducts = JSON.parse(fs.readFileSync(productsPath));
    const productIndex = allProducts.findIndex((prod, index) => {
        return prod.id === productId
    });
    
    allProducts.splice(productIndex, 1);
    
    fs.writeFile(productsPath, JSON.stringify(allProducts), (err) => {
      console.log(err);
    })
  }
   
}
