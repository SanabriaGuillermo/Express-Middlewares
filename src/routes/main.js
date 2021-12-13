const express = require("express");
const router = express.Router();
const {main, design, services, admin} = require("../controllers/mainController");
const {log} = require("../middlewares/userLogs");

router.get("/", main);
router.get("/services/design", design);
router.get("/services", services);
router.get("/admin", log, admin);

module.exports = router;