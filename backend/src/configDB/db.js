import mongoos from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB= async () => {
    try {
        await mongoos.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("Mongoose Connected");
    } catch (error) {
        console.log("error founded : ", error);
        process.exit(1)
    }
}
export default connectDB