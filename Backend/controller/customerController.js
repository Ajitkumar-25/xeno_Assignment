const Customer = require("../models/customer");

const addCustomer = async (req, res) => {
  const { name, email, totalSpends, visits, lastVisit } = req.body;
  const customer = new Customer({
    name,
    email,
    totalSpends,
    visits,
    lastVisit,
  });
  try {
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addCustomer};
