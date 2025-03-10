import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

mongoose.connect(process.env.MONGO_URL) 
  .then(() => {
    app.listen(port, () => {
      console.log("Listening on port 3000");
      console.log('Database connected');
    });
  })
  .catch((err) => {
    console.log(err);
  });



const port = 3000;
const app = express();


app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/jobs', (req, res) => {
  res.json({ message: "welcome to the api" });
});


