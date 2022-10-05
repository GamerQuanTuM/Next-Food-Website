import dbConnect from "../../../util/dbConnect.js";
import Product from "../../../models/Product.js";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect;

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }

  if (method === "PUT") {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body,{
        new:true,
      });
      res.status(200).json(product);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
  if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("Product deleted successfully");
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
}
