const { PrismaClient } = require("../lib/generated/prisma");
const prisma = new PrismaClient();
const WineInsert = async (req, res) => {
  try {
    const { name, description, price, categoryid } = req.body;

    const newWine = await prisma.wine_master.create({
      data: {
        name,
        description,
        price,
        categoryid,
      },
    });

    return res.json({
      Valid: true,
      message: "Wine inserted successfully",
      data: newWine,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};

const shisha_insert = async (req, res) => {
  try {
    const { name, description, price, categoryid } = req.body;

    const newWine = await prisma.sisha_master.create({
      data: {
        name,
        description,
        price,
        categoryid,
      },
    });

    return res.json({
      Valid: true,
      message: "shisha inserted successfully",
      data: newWine,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};
const food_insert = async (req, res) => {
  try {
    const { name, description, price, categoryid } = req.body;

    const newWine = await prisma.food_master.create({
      data: {
        name,
        description,
        price,
        categoryid,
      },
    });

    return res.json({
      Valid: true,
      message: "food inserted successfully",
      data: newWine,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};
module.exports = {
  WineInsert,
  shisha_insert,
  food_insert,
};
