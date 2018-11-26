const express = require('express');
const bodyParser = require('body-parser');
const port = 5000;

const sequelize = require('./util/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require('./routes/shop');

app.use(shopRoutes);

sequelize
  .sync()
  .then(result => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  })
  .catch(err => console.log(err));
