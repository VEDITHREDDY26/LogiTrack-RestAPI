const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const e = require("express");

const app = express();
const PORT = 4000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB connection
//new db:logsitic db
mongoose
  .connect(
    "mongodb://localhost:27017/logisticdb"
    //    {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define logistic Schema and model
const LogisticSchema = new mongoose.Schema({
  //1.orderid,4.shipping_date,5.destination_address,2.phone_no,3.email
  orderid: Number, // New field added
  phone: Number,
  email: String,
  shipping: String,
  destination: String,
});

const Logistic = mongoose.model("Logistic", LogisticSchema);
app.get("/", (req, res) => {
  res.send("Welcome to ABC LOGISTICS");
});

// to display all the contents
app.get("/log", async (req, res) => {
  try {
    const logistics = await Logistic.find();
    res.json(logistics);
    console.log("displayed details of logistics");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// to add new contents
app.post("/logistics", async (req, res) => {
  // Extract data from request body
  const { orderid, phone, email, shipping, destination } = req.body;

  // Validate request data
  if (!orderid || !phone || !email || !destination || !shipping) {
    return res.status(400).json({
      message: "orderid, phone, email, destination and shipping are required",
    });
  }

  // Create a new student instance
  const Log = new Logistic({ orderid, phone, email, destination, shipping });

  try {
    // Save the new student to the database
    await Log.save();
    // Respond with the newly created student
    res.status(201).json(Log);
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: err.message });
  }
});

// Update a logistic by ID
//do not place : in the url

app.put("/logistics/:id", async (req, res) => {
  const id = req.params.id;
  const { orderid, phone, email, destination, shipping } = req.body;

  try {
    const updatedLog = await Logistic.findByIdAndUpdate(
      id,
      { orderid, phone, email, destination, shipping },
      { new: true }
    );
    if (!updatedLog) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(updatedLog);
    console.log("updated sucessfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a logistic  by ID
//do not place : in the url
app.delete("/logistics/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedLog = await Logistic.findByIdAndDelete(id);
    if (!deletedLog) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json(deletedLog);
    console.log("deleted sucessfully");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
