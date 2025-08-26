// routes/me.js
const express = require("express");
const userRouter = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  PrismaClient,
} = require("/Users/daviddinh/Documents/projects/bui-backend/generated/prisma/index.js");
const prisma = new PrismaClient();

userRouter.get("/", auth, async (req, res) => {
  const profile = await prisma.profile.findUnique({
    where: { id: req.userId },
  });
  res.json({ userId: req.userId, email: req.user.email ?? null, profile });
});

module.exports = userRouter;
