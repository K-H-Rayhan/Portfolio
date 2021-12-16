import clientPromise from '../../lib/mongodb'
export default async function handler(req,res) {
  const client = await clientPromise
  const db = client.db("contact");
  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands
  const data1 = req.query;
  console.log(req.query);
  db.collection("me").insertOne(data1);
}
  