import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
app.use(express.json());
dotenv.config();

const myPort = process.env.HTTP_PORT;

app.get("/health", (req, res) => {
  res.status(200).send();
});

app.get("/devices", (req, res) => {
  const devicesPath = process.env.DEVICES_JSON;
  const file = path.basename(devicesPath);
  console.log(typeof file);
  res.status(200).json({ data: [file] });
});

app.get("/devices/deleted");

app.post("/devices");

app.route("/devices/{id}").get().delete();

app.listen(myPort, () => console.log(`Listening to port ${myPort}`));
