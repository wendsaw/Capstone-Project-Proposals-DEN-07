
const express =require('express')
const mongoose= require ('mongoose');
const authRoutes=require('./routes/authRoutes')
const listingsRoutes=require('./routes/listingsRoutes')
const dotenv = require('dotenv');
dotenv.config(); 

const app = express();

//middlewares

app.use(express.json())


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


app.use(express.json())
// app.use(cors())

//routes
app.use(authRoutes)
app.use(listingsRoutes)


// app.post('/apply', async (req, res) => {
//     try {
//         const resp= await JobApplication.create(req.body)
//         console.log(resp)
//         res.status(201).json(resp)
//     } catch(err) {
        
//         res.status(400).json(err)
//     }
// })