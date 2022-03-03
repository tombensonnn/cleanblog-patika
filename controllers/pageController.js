const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPostPage = (req, res) => {
  res.render("add_post");
};

exports.getEditPage = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id });
    res.render("edit", {
      post,
    });
  } catch (error) {
    console.log(error);
  }
};
