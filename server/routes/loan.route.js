import express from "express"; 
import { createLoan, getLoans } from "../controller/loan.controller.js";

const router = express.Router();

router.get("/getLoans", getLoans)
router.post("/createLoan", createLoan)

export default router