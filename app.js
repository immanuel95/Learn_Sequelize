const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = require('./util/database');

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

const port = 5000;

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => console.log(`App is listening to port ${port}!`));
  })
  .catch(err => console.log(err));
