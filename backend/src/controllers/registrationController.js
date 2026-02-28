const prisma = require("../config/prisma");

// REGISTER FOR EVENT
exports.registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;

    if (!eventId) {
      return res.status(400).json({ message: "Event ID is required" });
    }

    const registration = await prisma.registration.create({
      data: {
        userId: req.user.id,
        eventId,
      },
    });

    res.status(201).json({
      message: "Successfully registered",
      registration,
    });

  } catch (error) {

    // Duplicate registration error
    if (error.code === "P2002") {
      return res.status(400).json({
        message: "You already registered for this event",
      });
    }

    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET MY REGISTRATIONS
exports.getMyRegistrations = async (req, res) => {
  try {
    const registrations = await prisma.registration.findMany({
      where: { userId: req.user.id },
      include: {
        event: true,
      },
    });

    res.json(registrations);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
