const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Post = require("./models/Post");
const methodOverride = require("method-override");
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

mongoose.connect("mongodb://localhost/clenanblog-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // url'deki datayı okumamızı sağlar.
app.use(express.json()); // url'deki datayı json formatına çevirir.
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES

// Post Routes
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPostById);
app.post("/posts", postController.createPost);
app.put('/posts/:id', postController.editPost);
app.delete('/posts/:id', postController.deletePost);

// Page Routes
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPostPage);
app.get("/posts/edit/:id", pageController.getEditPage);

PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
