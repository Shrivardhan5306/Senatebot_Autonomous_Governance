const express = require("express");
const router = express.Router();

const prisma = require("../config/prisma");

const {
  register,
  login,
  getProfile,
  adminOnly,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected route
router.get("/profile", protect, getProfile);

// Admin-only route
router.get("/admin", protect, authorize("ADMIN"), adminOnly);

// 🔥 TEMP ROUTE TO MAKE USER ADMIN
router.get("/make-admin", async (req, res) => {
  try {
    await prisma.user.update({
      where: { email: "admin@test.com" },
      data: { role: "ADMIN" },
    });

    res.send("User updated to ADMIN");
  } catch (error) {
    res.status(500).json({ message: "Error updating role" });
  }
});

module.exports = router;
