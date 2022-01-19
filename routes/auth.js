const router = require("express").Router();

const {registerController , loginController } = require("../controllers/userControllers");

// register route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

module.exports = router;
