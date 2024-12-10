import CustomerModel from "../models/Customer.js";
import bcrypt from "bcrypt";

export async function addCustomer(user) {
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);
    return await CustomerModel.create(user);
}

export async function getAllCustomers(){
    return await CustomerModel.find();
}

// export async function login(user) {
//     const customer = await CustomerModel.findOne({ email: user.email });
//     if (customer) {
//         const result = await bcrypt.compare(user.password, customer.password);
//         return result ? true : false;
//     }
//     return false;
// }


