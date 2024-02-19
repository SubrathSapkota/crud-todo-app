import mongoose from "mongoose";

export const connectionInstance = () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`CONNECTED TO THE DATABASE`))
    .catch((error) => console.log(error));
