import express from "express";
import healthRoutes from "./routes/healthRoutes";
import deviceRoutes from "./routes/deviceRoutes";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/devices", deviceRoutes);

export default app;
