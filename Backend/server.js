const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./database/connection");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT ? process.env.PORT : 5000, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
