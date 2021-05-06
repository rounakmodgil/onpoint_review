const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    gender: String,
    password: String,
    tokenVersion: {
      type: Number,
      default: 0,
    },
    AddedPosts: [
      {
        postid: String,
      },
    ],
    UpvotePosts: [
      {
        postid: String,
      },
    ],
    DownvotePosts:[
      {
        postid: String,
      },
    ],
    BookMarks: [
      {
        postid: String,
      },
    ],
  },
  {collection: 'users'},
);

let postSchema = new mongoose.Schema(
  {
    userid: String,
    username: String,
    timestamp: String,
    imageurl: String,
    district: String,
    state: String,
    category: String,
    upvote: [
      {
        userid: String,
      },
    ],
    downvote: [
      {
        userid: String,
      },
    ],
    description: String,
  },

  {collection: 'posts'},
);

let locationdataSchema = new mongoose.Schema(
  {
    state: String,
    district:String ,
    stateType:String
  },
  {collection: 'location'},
);

let categorySchema = new mongoose.Schema(
  {
    category: String,
  },
  {collection: 'category'},
);

var Users = mongoose.model('User', userSchema);
var Posts = mongoose.model('Post', postSchema);
var Location = mongoose.model('Location', locationdataSchema);
var Category = mongoose.model('Category', categorySchema);

module.exports = {Users, Posts, Category, Location};
