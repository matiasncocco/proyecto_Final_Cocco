let express = require("express")
const router = express.Router();
let mainController = require("../controllers/mainController.js")

router.get("/", mainController.index)

module.exports = router 