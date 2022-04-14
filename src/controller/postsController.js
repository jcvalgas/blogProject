
import _ from "lodash";
import { Post } from "../models/posts.js";

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

export const getIndex = (req, res) => {
  Post.find({}, function(err, posts){
    res.render("home.ejs", {
      homeStartingContent,
      posts
      });
  });
}

export const getAbout = (req, res) => {
    res.render('about.ejs', {
        aboutContent
      })
}

export const getContact = (req, res) => {
    res.render('contact.ejs', {
        contactContent
      })
}

export const getPost = (req, res) => {
    let requestedPostId = req.params.postId;

    Post.findOne({_id: requestedPostId}, function(err, post){
      res.render("post.ejs", {
        title: post.title,
        content: post.content
      });
    });

    
}

export const getCompose = (req, res) => {
    res.render('compose.ejs')
}

export const postCompose = (req, res) => {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save((err) => {
    res.redirect('/')
  })
  
}