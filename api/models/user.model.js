import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },

    profilePicture:{
        type: String,
        default: 'https://imgs.search.brave.com/O6rLvO8-5IAjWakgOKrUpBMPRo2IDSw78luSsXhnQbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zMC0z/MDc0MTZfcHJvZmls/ZS1pY29uLXBuZy1p/bWFnZS1mcmVlLWRv/d25sb2FkLXNlYXJj/aHBuZy1lbXBsb3ll/ZS5wbmc',

    },
    
    isAdmin: {
        type: Boolean,
        default: false,
    },

    }, {timestamps: true}
);


const User = mongoose.model('User', userSchema);

export default User;