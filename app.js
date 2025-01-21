const express=require('express');
const cors = require('cors');
const authRouter = require('./routes/authRoutes');
const cookieParser=require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


//creating Express Application
const app=express();
app.use(bodyParser.json());



const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))



// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true); // Allow requests from this origin
//       } else {
//         callback(new Error('Not allowed by CORS')); // Reject others
//       }
//     },
//     credentials: true, // Allow credentials like cookies or headers
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed HTTP methods
//     allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'], // Specify allowed headers
//   })
// );



// this  is  first one
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true, // Ensure cookies are sent
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
//   })
// );


app.use(
  cors({
    origin: function (origin, callback) {
      console.log('Request Origin:', origin);  // Log the origin of incoming requests
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Ensure cookies are sent
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  })
);





  
  




app.use(express.json());
app.use(cookieParser());




app.use('/api/v1',authRouter);


//Listen Request
module.exports=app;