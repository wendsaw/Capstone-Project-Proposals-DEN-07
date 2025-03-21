const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

//route
const listingsRoutes = require('./routes/listingsRoutes');
const authRoutes = require('./routes/authRoutes');
const applyRoutes = require('./routes/applyRoutes');
const contactRoutes=require('./routes/contactRoutes')


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

app.use(listingsRoutes);
app.use(authRoutes);
app.use(applyRoutes);
app.use(contactRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
      console.log('Database connected');
    });
  })
  .catch((err) => console.error(err));
