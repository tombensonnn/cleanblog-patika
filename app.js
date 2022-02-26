const express = require("express");
const mongoose = require('mongoose');
const ejs = require("ejs");
const Post = require('./models/Post');



const app = express();


mongoose.connect('mongodb://localhost/clenanblog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));  // url'deki datayı okumamızı sağlar. 
app.use(express.json()); // url'deki datayı json formatına çevirir.

// ROUTES
app.get('/', async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts
  });
});

// app.get("/index", (req, res) => {
//   res.render("index");
// });

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post("/posts", async (req,res) => {
  // console.log(req.body);
  await Post.create(req.body)
  res.redirect('/');
})

port = 3000;

app.listen(port, () => {
  console.log(`Server started successfully. Port: ${port}`);
});
