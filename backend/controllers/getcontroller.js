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

module.exports = { GetAllWines };
