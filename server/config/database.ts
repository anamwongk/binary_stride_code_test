import config from 'config'
import mongoose from "mongoose";

const db = async () => {
  try {
    const dbUri: string = config.get("dbUri") as string;
    
    await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => {
        console.log("Database connected.");
      });
  } catch (err) {
    console.error(err);
  }
};

export default db;