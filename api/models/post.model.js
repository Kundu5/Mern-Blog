import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
    
    userId: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      default:
        'https://imgs.search.brave.com/qZjvRZUorxa0-R0cidI2yGNNQN5Rq80ZDbV8seD0F10/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXNp/Z253aXphcmQuY29t/L2Jsb2cvYmxvZy1w/b3N0LWltYWdlcy9y/ZXNpemUvZmJmNmE2/ZTAtNmFmZi0xMWU3/LTk5MmEtYWQ3ZmFk/NmUzMzM1XzE2NTA1/NTIzNTEzODdfcmVz/aXplLmpwZw',
    },

    category: {
      type: String,
      default: 'uncategorized',
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model('Post', postSchema);
export default Post;