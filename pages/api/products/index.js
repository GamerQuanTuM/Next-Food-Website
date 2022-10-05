import dbConnect from "../../../util/dbConnect.js";
import Product from "../../../models/Product.js";

export default async function handler(req, res) {
  const { method, cookies } = req;

  const token = cookies.token;

  await dbConnect;

  if (method === "GET") {
    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }

  if (method === "POST") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
}
