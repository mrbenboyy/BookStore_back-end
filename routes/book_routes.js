import express from 'express';

const router = express.Router();
import * as bookController from '../controllers/book_controller.js';

router.route("/")
    .get(bookController.getAllBooks)
    .post(bookController.addBook);

router.route("/:id")
    .get(bookController.getBookById)
    .delete(bookController.deleteBook)
    .patch(bookController.updateBook);

export default router;
