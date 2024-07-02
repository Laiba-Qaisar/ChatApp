import mongoose from "mongoose"
const connectDatabase=async()=>{
try {
    await  mongoose.connect(process.env.MONGO_URL)
    console.log("mongo database connectes")
    
} catch (error) {
    console.log("Error connecting to mongoose",error.message)
}
}
export default connectDatabase