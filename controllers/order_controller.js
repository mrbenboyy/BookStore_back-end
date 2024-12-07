import * as orderService from '../services/order_service.js';

export async function getAllOrders(req, res) {
    try {
        const orders = await orderService.getAllOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching orders", error: error.message });
    }
}

export async function addOrder(req, res) {
    try {
        const order = await orderService.addOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while adding the order", error: error.message });
    }
}
