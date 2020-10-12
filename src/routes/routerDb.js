const express = require("express");

const router = express.Router();

const { authenticated } = require("../../middleware/authentication");

//Categories
const {
  getCategory,
  readOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/category");

router.get("/category", getCategory);
router.get("/category/:id", readOneCategory);
router.post("/category", authenticated, createCategory);
router.patch("/category/:id", authenticated, updateCategory);
router.delete("/category/:id", authenticated, deleteCategory);

//Users
const {
  getUser,
  readOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

router.get("/user", getUser);
router.get("/user/:id", readOneUser);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);

//Books
const {
  getBooks,
  readOneBooks,
  createBooks,
  updateBooks,
  deleteBooks,
} = require("../controller/books");

router.get("/books", getBooks);
router.get("/books/:id", readOneBooks);
router.post("/books", authenticated, createBooks);
router.patch("/books/:id", authenticated, updateBooks);
router.delete("/books/:id", authenticated, deleteBooks);

//auth
const { register, login } = require("../controller/auth");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
