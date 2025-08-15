import { db } from "../libs/dbConnect.js";

const collection = db.collection("users");

export const test = async (req, res) => {
  let results = await collection.find({}).toArray();
  res.status(200).json(results);
}