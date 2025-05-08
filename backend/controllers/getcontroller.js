const { PrismaClient } = require("../lib/generated/prisma");
const prisma = new PrismaClient();

const GetAllWines = async (req, res) => {
  try {
    const wines = await prisma.wine_master.findMany();

    return res.json({
      Valid: true,
      message: "Wines fetched successfully",
      data: wines,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};
const GetAllFoods = async (req, res) => {
  try {
    const wines = await prisma.food_master.findMany();

    return res.json({
      Valid: true,
      message: "foods fetched successfully",
      data: wines,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};

const GetAllshisha = async (req, res) => {
  try {
    const wines = await prisma.sisha_master.findMany();

    return res.json({
      Valid: true,
      message: "foods fetched successfully",
      data: wines,
    });
  } catch (error) {
    console.error("Fetch error:", error);
    return res.json({ Valid: false, message: "Internal Server Error" });
  }
};
module.exports = { GetAllWines, GetAllFoods, GetAllshisha };
