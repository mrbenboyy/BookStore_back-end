import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    orders: { type: mongoose.Types.ObjectId, ref: "Order" }
});

const CustomerModel = mongoose.model("Customer", customerSchema);

export default CustomerModel;
