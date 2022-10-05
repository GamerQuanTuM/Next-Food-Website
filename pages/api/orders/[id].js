import dbConnect from "../../../util/dbConnect.js";
import Order from "../../../models/Order.js";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect;

  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
  if (method === "DELETE") {
    try {
      await Order.findByIdAndDelete(id);
      res.status(200).json("Order deleted successfully");
    } catch (errors) {
      res.status(500).json(errors);
    }
  }
};

export default handler;
