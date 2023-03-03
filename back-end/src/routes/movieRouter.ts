// require the express module
import express from "express";
import { getClient } from "../db";

const movieRouter = express.Router();
const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};
// endpoints go here
export default movieRouter;
