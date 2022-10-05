import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const url = process.env.MONGO_URI;

const connect = mongoose.connect(url).then(() => {
    console.log("Connection Succesful");
}).catch(() => {
    console.log("No connection")
});
export default connect;

