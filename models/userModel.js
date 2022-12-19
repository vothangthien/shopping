import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
name:{
        type:String,
        required:true,
        trim:true,
},

email:{
     type: String,
     required: true,
     unique: true    
},

password:{
        type:String,
        required:true,
},
role:{
     type: String,
     default: 'user'
},
root:{
     type: Boolean,
     default: false
},
avatar: {
     type: String,
     default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
 }
},{
     timestamps:true,
})

let Dataset=mongoose.models.user || mongoose.model('User',UserSchema);
export default Dataset