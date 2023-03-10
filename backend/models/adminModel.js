import mongoose from "mongoose"

const adminSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required: [true,"please add a email"],
            unique:true
        },
        password:{
            type:String,
            required: [true,"please add a password"]
        },
    },
    {
        timestamps:true
    }
)
const Admin = mongoose.model("Admin",adminSchema,"admin")
export default Admin