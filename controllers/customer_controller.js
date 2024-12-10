import * as customerService from "../services/customer_service.js";

export async function addCustomer(req, res) {
    try {
        const user = await customerService.addCustomer(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while adding the customer", error: error.message });
    }
}

export async function getAllCustomers(req, res) {
    try {
        const customers = await customerService.getAllCustomers(req.body);
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching all customers", error: error.message });
    }
}

// export async function login(req, res) {
//     try {
//         const result = await customerService.login(req.body);
//         if (result) {
//             res.status(200).json({ message: 'connected with success' });
//         } else {
//             res.status(401).json({ message: "email or password not correct!" });
//         }
//     } catch (error) {
//         res.status(500).json({ message: "An error occurred during login", error: error.message });
//     }
// }
