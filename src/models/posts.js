import mongoose from "mongoose"

export const connection = mongoose.connect("mongodb+srv://admin-valgas:valgas375466@cluster0.mai4n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/blogDB", {useNewUrlParser: true});

const postSchema = {
    title: String,
    content: String
  };

export const Post = mongoose.model("Post", postSchema);
