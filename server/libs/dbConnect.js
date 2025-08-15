import { MongoClient, ServerApiVersion } from "mongodb";

const { MONGODB_URI, MONGODB_DATABASE } = process.env;

if (MONGODB_URI) {
  console.log(MONGODB_URI);
} else {
  throw new Error("MONGODB_URI is not defined");
}

if (MONGODB_DATABASE) {
  console.log(MONGODB_DATABASE);
} else {
  throw new Error("MONGODB_DATABASE is not defined");
}

// const client = new MongoClient(MONGODB_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });
const client = new MongoClient(MONGODB_URI);

try {
  // Connect the client to the server
  await client.connect();

  // Send a ping to confirm a successful connection
  await client.db().command({ ping: 1 });
  console.log('Connected to Mongodb!')
} catch (error) {
  console.error(error);
}

export const db = client.db(MONGODB_DATABASE);