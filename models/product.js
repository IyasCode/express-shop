const fs = require('fs');
const path = require('path');

const dataPath = path.join(
  path.dirname(process.mainModule.filename),
  'datas',
  'products.json'
  )

module.exports = class Product {
  constructor(id, name, price, urlImage) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.urlImage = urlImage
  }
  
  save() {
    let productsDatas = []
    
    fs.readFile(dataPath, (err, data) => {
      if (!err) {
        productsDatas = JSON.parse(data);
      }
      
      productsDatas.push(this);
      
      fs.writeFile(dataPath, JSON.stringify(productsDatas), (err) => {
        if (err) {
          console.log("product model write file", err);
        }
      })
    })
  }
  
  static getAll(callback) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        casllback([]);
      } else {
        callback(JSON.parse(data));
      }
    })
  }
  
  static getProduct(productId, callback) {
    fs.readFile(dataPath, (err, data) => {
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
  
}
