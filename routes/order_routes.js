import express from "express";
import * as orderController from "../controllers/order_controller.js";

const router = express.Router();

router.route("/")
    .get(orderController.getAllOrders)
    .post(orderController.addOrder);

export default router;
