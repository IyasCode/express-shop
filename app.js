const path = require('path');

const express = require('express');

const app = express();

const shopsRoute = require('./routes/shops/index');
const shopsProductsRoute = require('./routes/shops/products');
const shopsProductDetailRoute = require('./routes/shops/productDetail')
const shopsMyCartRoute = require('./routes/shops/myCart')
const adminsRoute = require('./routes/admins/index')
const adminsAddProductRoute = require('./routes/admins/addProduct');
const adminsEditProductRoute = require('./routes/admins/editProduct');
const adminsAllProductsRoute = require('./routes/admins/allProducts');

const { getError } = require('./controllers/error');

const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: false
}));

app.use(adminsRoute);
app.use(adminsAddProductRoute);
app.use(adminsEditProductRoute);
app.use(adminsAllProductsRoute);

app.use(shopsProductsRoute);
app.use(shopsProductDetailRoute);
app.use(shopsMyCartRoute)
app.use(shopsRoute);

app.use(getError)

app.listen(PORT, (req, res, next) => {
  console.log(`listening on port ${PORT}...`);
});
