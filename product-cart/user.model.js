import mongoose from "mongoose";

const Admin_schema=new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
})



export default mongoose.model.admins||mongoose.model("admin",Admin_schema);