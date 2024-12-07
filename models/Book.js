import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, default: 0 },
    date_publication: { type: Date, default: Date.now },
    author: { type: String, required: true },
    orders: { type: mongoose.Types.ObjectId, ref: "Order" }
});

const BookModel = mongoose.model("Book", bookSchema);

export default BookModel;
