const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort("dateCreated");
  res.render("index", {
    posts,
  });
};

exports.getPostById = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", {
    post,
  });
};

exports.createPost = async (req, res) => {
  // console.log(req.body);
  await Post.create(req.body);
  res.redirect("/");
};

exports.editPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });

  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  console.log(post);
  res.redirect(`/posts/${req.params.id}`);
};

exports.deletePost = async (req, res) => {
  const deletedPost = await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
