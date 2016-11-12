'use strict';

console.log('App starting...');

// Load dependencies
const cors = require('cors');
const express = require('express');
const jwt = require('express-jwt');

const authClientId = 'au3hYrK6rnMx3RLIMm8rsjtt0sf48qqv';
const authSecret = process.env.AUTH0_SECRET;
const mockData = require('./mock-data.js');

const app = express();

app.use(cors());

// implement a JWT middleware that will ensure the validity of our token
// require each protected route to have a valid token sent in the Authorization header
const authCheck = jwt({
  secret: new Buffer(authSecret, 'base64'),
  audience: authClientId
});

// Public route
app.get('/api/deals/public', (req, res) => {
  // Array of public deals
  let deals = mockData.publicDeals;

  res.json(deals);
});

// Private route
app.get('/api/deals/private', authCheck, (req, res) => {
  // Array of private deals
  let deals = mockData.privateDeals;

  res.json(deals);
});

app.listen(3001);
console.log('Serving deals on localhost:3001');
