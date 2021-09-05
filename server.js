import express from "express";
import dotenv from "dotenv";
import healthRoutes from "./routes/healthRoutes";
import deviceRoutes from "./routes/deviceRoutes";

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.HTTP_PORT;

app.use("/health", healthRoutes);
app.use("/devices", deviceRoutes);

const server = app.listen(port, () => console.log(`Listening to port ${port}`));

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
  });
});
