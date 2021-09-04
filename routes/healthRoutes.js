import { router } from "express";

router.get("/health", (req, res) => {
  res.status(200).end();
});
