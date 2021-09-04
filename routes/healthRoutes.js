import { router } from "express";

router.get("/", (req, res) => {
  res.status(200).end();
});
