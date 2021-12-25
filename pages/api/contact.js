import clientPromise from '../../lib/mongodb'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const bcrypt = require('bcrypt');
const saltRounds = 10;
var savedHash = '$2b$10$61FkQYfOdA3FNwApowEP/uUbAJN3HOhPdfWHzFfSn9tvuJHfMo/1u';

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db("contact");
  const data1 = req.query;
  if (data1.username != null) { db.collection("me").insertOne(data1); }
  const myPlaintextPassword = req.query.password;
  bcrypt.compare(myPlaintextPassword, savedHash, function (err, result) {
    if (result) {
      db.collection("me").find({}).toArray().then(datax => {
        res.status(200).send(datax);
      });
    } else {
      res.status(200).json({ name: 'False' });
    }
  })
}
