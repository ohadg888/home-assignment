import app from "./app";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.HTTP_PORT;

const server = app.listen(port, () => console.log(`Listening to port ${port}`));

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
  });
});
