import React, { useState, useEffect } from "react";
import axiosinstance from "../../utils/axios";
import { MenuCard } from "./MenuCard";
import "./Menu.css";
export const FoodMenu = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchFood();
  }, []);
  const fetchFood = async () => {
    try {
      const res = await axiosinstance.get("/get/getFood");
      console.log(res.data);
      setFoods(res.data.data);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };
  return (
    <div className="food-menu-wrapper">
      {foods.map((food) => (
        <MenuCard
          key={food.id}
          name={food.name}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
};
