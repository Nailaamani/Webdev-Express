//Filename: Express.js
//Author  : Naila Amani
//Desc.   : as a server

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};
  
  app.use(cors(corsOptions));
  
  app.use(bodyParser.json());
  
  app.use(bodyParser.urlencoded({ extended: true }));

//for MongoDB database setup
const db = require("./app/models");

const connectDB = async () => {
      try {
          await db.mongoose
          .connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          })
  
          console.log('Successfully connect to MongoDB.');
      } catch (err) {
          console.log('Connection error', err);
      }
  };
  
  connectDB();
  
  // simple route in 8080 page
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to My Blog Application." });
  });
  
  // for routes set up
   require("./app/routes/data.routes")(app);

  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });

