const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const methodOverride = require("method-override");
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

mongoose.connect("mongodb+srv://canuyumaz:sCzEdTyPLlIc135@cleanblog.kc1tz.mongodb.net/cleanblogdb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Connection Successful');
}).catch(err => {
  console.log(err);
})

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
