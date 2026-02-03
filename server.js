const dotenv = require("dotenv");
dotenv.config();

const app= require("./src/app");
const connectDB= require("./src/database/db")

const PORT = process.env.PORT || 3000

// when application gets connected to databse only then switch on the server
connectDB()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database", err.message);
  });