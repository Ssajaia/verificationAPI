import express from "express";
import userRoutes from "./routes/user.js";

const app = express();
app.use(express.json());
const PORT = 3000;

app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
