import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongo database connectes");
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};
export default connectDatabase;
