import React from "react";
import ListSection from "@/views/ListSection/ListSection";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const data = {
  title: "Liked list",
  recipes: [
    {
      id: "1",
      name: "Carrot Cake with Cream Cheese Frosting",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 10,
    },
    {
      id: "2",
      name: "Chocolate Chip Cookie Dough Brownies",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 20,
    },
    {
      id: "3",
      name: "Strawberry Cheesecake Ice Cream",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 30,
    },
    {
      id: "4",
      name: "Lemon Blueberry Layer Cake",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 40,
    },
    {
      id: "5",
      name: "Lemon Blueberry Layer Cake",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 40,
    },
    {
      id: "6",
      name: "Lemon Blueberry Layer Cake",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 40,
    },
    {
      id: "7",
      name: "Lemon Blueberry Layer Cake",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 40,
    },
    {
      id: "8",
      name: "Lemon Blueberry Layer Cake",
      imageSrc: "/cake2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      preparationTime: 40,
    },
  ],
};

const page = () => {
  return (
    <ProtectedRoute>
      <ListSection
        title={data.title}
        recipes={data.recipes}
        showHeartIcon={true}
      />
    </ProtectedRoute>
  );
};

export default page;
