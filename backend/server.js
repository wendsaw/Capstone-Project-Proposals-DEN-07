const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const listingsRoutes = require('./routes/listingsRoutes');

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Change to your frontend domain in production
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use(authRoutes);
app.use(listingsRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log('Database connected');
    });
  })
  .catch((err) => console.error(err));
