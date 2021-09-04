import express from "express";

const router = express.Router();

const healthRoutes = () => {
  router.get("/", (req, res) => {
    res.status(200).end();
  });
};

export default healthRoutes;
