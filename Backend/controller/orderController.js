const Order = require("../models/order");

const addOrder = async (req, res) => {
  const { customerId, amount, date } = req.body;
  const order = new Order({
    customerId,
    amount,
    date,
  });
  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addOrder };
