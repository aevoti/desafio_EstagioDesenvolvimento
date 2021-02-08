const express = require("express");
const router = express.Router();

const auth = require("./middlewares/auth");
const user = require("./handlers/user");
const location = require("./handlers/location");

router.post("/auth", user.signin);
router.post("/user", user.signup);

router.get("/location", auth, location.listLocations);
router.post("/location", auth, location.createLocation);
router.delete("/location", auth, location.deleteLocation);

module.exports = router;
