import express from "express";
import * as customerController from "../controllers/customer_controller.js";

const router = express.Router();

router.route("/")
    .get(customerController.getAllCustomers)
    .post(customerController.addCustomer);

// router.route("/login")
//     .post(customerController.login);

export default router;
