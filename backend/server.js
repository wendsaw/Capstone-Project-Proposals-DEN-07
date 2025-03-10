import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Listing from './models/listing.js';

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

app.use(express.json())
// app.use(cors())

app.get('/', async (req, res) => {
    
        res.send('hello')
   
})

app.get('/listings', async (req, res) => {
    try {
        const listings = await Listing.find({})
        res.status(200).json(listings)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

app.get('/listings/:id', async (req, res) => {
    try {
        const listing = await Listing.findById(req.params.id)
        res.status(200).json(listing)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

app.post('/listing', async (req, res) => {
    try {
        const listing= await Listing.create(req.body)
        console.log(listing)
        res.status(201).json(listing)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

app.delete('/listings/:id', async (req, res) => {
    try {
        const response = await Listing.findByIdAndDelete(req.params.id)
        console.log(response)
        res.status(200).json(response)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}) 

app.put('/listing/:id', async (req, res) => {
    try {
        console.log('PUT /listing/:id')
        console.log(req.body)
        const response = await Listing.findByIdAndUpdate(req.params.id, req.body) // can add { new: true } as third argument
        // console.log(response)
        res.status(200).json(response)
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
})

