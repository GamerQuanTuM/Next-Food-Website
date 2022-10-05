import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI;

mongoose.connect(url).then(() => {
    console.log("Connection Succesful");
}).catch(() => {
    console.log("No connection")
});
export default url;

