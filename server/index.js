const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let users = [];
let groceryList = [];
let updatedAt = new Date().toISOString();
let invoiceNumber = 0;

app.get("/grocery", (req, res) => res.json({ groceryList }));

app.post("/grocery/cart/add", (req, res) => {
  const { selectedItems } = req.body;
  
  if (!Array.isArray(selectedItems)) {
    return res.status(400).json({ error: "The products received are not valid." });
  }
  
  groceryList.push(...selectedItems);
  console.log("Products saved:", groceryList);
  
  res.json({ message: "Products saved correctly.", groceryList });
});

app.put("/grocery/cart/update", (req, res) => {
  const { selectedItems } = req.body;
  
  if (!Array.isArray(selectedItems)) {
    return res.status(400).json({ message: "Invalid request format. selectedItems should be an array." });
  }
  
  console.log("Received cart update:", selectedItems);
  updatedAt = new Date().toISOString();
  
  res.json({ message: "Cart updated successfully", updatedCart: selectedItems, updatedAt });
});

app.post("/grocery/invoice", (req, res) => {
  const totalAmount = groceryList.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  invoiceNumber += 1;

  const invoice = {
    id: Date.now(),
    date: new Date().toISOString(),
    invoiceNumber,
    items: groceryList,
    totalAmount,
  };

  console.log("Invoice created:", invoice);
  res.json({ message: "Invoice created successfully", invoice });
});



app.post("/users", (req, res) => {
  const { username, email, password } = req.body;
  const user = { username, email, password };

  users.push(user);
  console.log("User added:", user);

  res.send({ users });
});

app.get("/", (req, res) => {
  res.json({ users, groceryList });
  console.log("Server running...");
});

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
