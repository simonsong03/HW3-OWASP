const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Server received:", email, password);

  if (!email || !password) {
    return res.status(400).json({ 
        message: "Email and password are required." });
        console.log("Email and password are required.");
  }
  if (!email.includes("@")) {
    return res.status(400).json({ 
        message: "Invalid email format." });
        console.log("Invalid email format.");
  }
  if (password.length < 8) {
    return res.status(400).json({ 
        message: "Password must be at least 8 characters long." });
        console.log("Password must be at least 8 characters long.");
  }
  res.json({ message: "Login input validated successfully." });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});