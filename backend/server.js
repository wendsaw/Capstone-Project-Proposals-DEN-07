const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//route
const listingsRoutes = require('./routes/listingsRoutes');
const authRoutes = require('./routes/authRoutes');
const applyRoutes = require('./routes/applyRoutes');


dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());

// Routes

app.use(listingsRoutes);
app.use(authRoutes);
app.use(applyRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log('Database connected');
    });
  })
  .catch((err) => console.error(err));
