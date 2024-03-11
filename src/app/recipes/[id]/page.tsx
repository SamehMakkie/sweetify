import getRecipeByID from "@/services/getRecipeByID";
import MailsSubscriptionCard from "@/views/MailsSubscriptionCard/MailsSubscriptionCard";
import PrepTime from "@/views/PrepTime/PrepTime";
import RecipeDetailsSection from "@/views/Recipe/RecipeDetailsSection/RecipeDetailsSection";
import RecipeFunctionIcons from "@/views/Recipe/RecipeFunctionIcons/RecipeFunctionIcons";
import RecipeHeading from "@/views/Recipe/RecipeHeading/RecipeHeading";
import React from "react";

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

const Recipe: React.FC<IProps> = async ({ params }) => {
  const { data } = await getRecipeByID({ id: params.id });

  if (!data) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="w-full grid grid-cols-3 gap-x-10 gap-y-16">
      <section className="w-full col-span-3 lg:col-span-2 flex flex-col gap-5">
        <RecipeHeading title={data.name} />
        <img
          src={data.imageSrc}
          alt={data.name}
          className="w-full md:h-[650px] object-cover rounded-2xl drop-shadow-2xl"
        />
      </section>
      <section className="w-full col-span-3 lg:col-span-1 flex flex-col gap-5 justify-center">
        <PrepTime time={data.preparationTime} />
        <RecipeDetailsSection
          title={"Ingredients"}
          ingredients={data.ingredients}
        />
        <RecipeFunctionIcons id={params.id} />
      </section>
      <section className="w-full col-span-3 flex flex-col gap-5 justify-center">
        <main className="w-full flex lg:max-w-3xl mx-auto">
          <RecipeDetailsSection
            title={"How to prepare"}
            ingredients={data.howToPrepare}
          />
        </main>
      </section>
      <section className="w-full col-span-3 flex flex-col gap-5 justify-center">
        <MailsSubscriptionCard />
      </section>
    </div>
  );
};

export default Recipe;
