import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
    dob:{type:Date, required: true, default:Date.now()},
    location:{type:String},
    about:{type:String},
    tags:{type:[String]},
    joinedOn:{type:Date, default:Date.now}
})

export default mongoose.model("User", userSchema)