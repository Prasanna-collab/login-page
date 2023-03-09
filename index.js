const express = require('express');
require('dotenv').config();
const cors = require('cors');
const db = require('./db/connect');
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/AuthRoutes');

const app = express();

// db connection
db();

// middleware
app.use(cookieParser())
app.use(express.json());
app.use(cors());

// route accessibility
app.use('/api', authRoutes)

// port middleware
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
