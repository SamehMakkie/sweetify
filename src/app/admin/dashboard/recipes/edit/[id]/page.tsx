import React from "react";
import RecipeForm from "@/views/Admin/Dashboard/Recipes/RecipeForm/RecipeForm";
import getRecipeByID from "@/services/getRecipeByID";
import Sidebar from "@/views/Admin/Dashboard/Sidebar/Sidebar";

interface IRecipeData {
  name: string;
  imageSrc: string;
  preparationTime: number;
  ingredients: string[];
  howToPrepare: string[];
}

interface IProps {
  params: {
    id: string;
  };
}

const page: React.FC<IProps> = async ({ params }) => {
  const data: IRecipeData = await getRecipeByID({ id: params.id });
  const formData = {
    recipeTitle: data.name,
    prepTime: data.preparationTime.toString(),
    ingredients: data.ingredients,
    steps: data.howToPrepare,
  };

  return (
    <div className="flex flex-col md:flex-row px-5 md:px-24 py-10 gap-10 justify-between">
      <Sidebar path={"recipes"} />
      <RecipeForm
        mode="edit"
        recipeId={params.id}
        currentImageURL={data.imageSrc}
        currentRecipeData={formData}
      />
    </div>
  );
};

export default page;
