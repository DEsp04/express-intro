//There are several backend frameworks like express. Express is a backend framework for JavaScript.
//Ex- Python has Django framework, PHP has Larvel framework, and Ruby has Rail.
//Express is known to be fast and being minimalist which means it lightweight-more work from your part but you can add more features.
//it's advise to create a file for express because that way you can reference it back when you're creating a full-stack
//We're learning MERNStack --> MongoDB, Express, React, Node



//this how we start an express backend project
const express = require("express");
//this ensure that if we use port 3000, it will give us another port
const PORT = process.env.Port || 3000;

//we're calling the express object and saving it to the app variable
const app = express();

//listen method of express takes into argument: one is the port, and the other is an anonymous arrow function with a console.log. Console log will help you nagivate in the backend.
//When I call the express object, I will attach it to the listen(), we want the Port and the anonymous function will return the console log. The console log mssg you will see it in the terminal
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//HTTP request is sent to http://localhost:3000/. When visitor goes to the http://localhost:3000/ we get the "Hello there!"
//call the handler function which is the second argument of the get()
//server need routes.
// the slash is the end of the endpoint which is like saying the homepage
app.get("/", (req, res) => {
  res.send("Welcome to my webpage!");
});

app.get("/favorite-food", (req, res) => {
  res.send("Platano con salami");
});

app.get("/favorite-movie", (req, res) => {
  res.send("The Godfather 1 and 2");
});

app.get("/about-me", (req, res) => {
  res.send("As an educational paraprofessional, working with students in the area of computer science increase my interest in coding. Moving forward, I want to expand my knowledge in programming, and pursue a career in web development.");
});

app.get("/contact", (req, res) => {
  res.send("Your email address");
});

//npm init -> to get the package json into the subfolder folder
//npm install express --save -> inside the subfolder

//npm install nodemon -> this package is common to use it with express. Nodemon restart express whenever you make changes to the server. It restart the server for you. It can be also use for front end


//Before we start the server we need to go to the package.json and add to the "scripts" we will reference "nodemon server.js"


