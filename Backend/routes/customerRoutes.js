const express = require("express");
const router = express.Router();
const customerController = require("../controller/customerController");

router.post("/addCustomer", customerController.addCustomer);

module.exports = router;
