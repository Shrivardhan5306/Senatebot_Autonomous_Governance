const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const {
  createEvent,
  getEvents,
  getEventById,
} = require("../controllers/eventController");

// Public
router.get("/", getEvents);
router.get("/:id", getEventById);

// Admin only
router.post("/", protect, authorize("ADMIN"), createEvent);

module.exports = router;
