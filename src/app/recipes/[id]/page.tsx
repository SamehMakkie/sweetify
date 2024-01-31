import MailsSubscriptionCard from "@/views/MailsSubscriptionCard/MailsSubscriptionCard";
import RecipeDetailsSection from "@/views/Recipe/RecipeDetailsSection/RecipeDetailsSection";
import RecipeFunctionIcons from "@/views/Recipe/RecipeFunctionIcons/RecipeFunctionIcons";
import RecipeHeading from "@/views/Recipe/RecipeHeading/RecipeHeading";
import React from "react";

// For the cake:
// Preheat your oven to 350°F (180°C) and grease two 9-inch cake pans.
// In a medium-sized mixing bowl, whisk together the flour, baking powder, baking soda, cinnamon, nutmeg, and salt.
// In a large mixing bowl, beat the eggs until they are light and frothy.
// Gradually add in the sugar, oil, and vanilla extract while continuing to beat the mixture until it is well combined.
// Stir in the grated carrots and chopped pecans (if using).
// Gradually fold the dry ingredients into the wet ingredients until everything is well combined.
// Pour the batter evenly into the prepared cake pans and smooth the surface with a spatula.
// Bake for approximately 25-30 minutes or until a toothpick inserted into the center of the cake comes out clean.
// Remove the cake pans from the oven and let them cool completely before frosting.
// For the cream cheese frosting:
// In a large mixing bowl, beat the cream cheese and butter until they are light and fluffy.
// Gradually add in the powdered sugar and vanilla extract while continuing to beat the mixture until it is smooth and creamy.
// Once the cakes have cooled, place one cake layer on a serving plate and spread a generous layer of frosting on top.
// Place the second cake layer on top of the frosting and frost the top and sides of the cake with the remaining frosting.
// Optional: Garnish the top of the cake with additional chopped pecans or walnuts.
// Chill the cake in the refrigerator for at least 30 minutes to set the frosting before serving.

const dumbData = {
  title: "Recipe name",
  ingredient: [
    "2 cups all-purpose flour",
    "2 teaspoons baking powder",
    "1 1/2 teaspoons baking soda",
    "1 1/2 teaspoons ground cinnamon",
    "1/2 teaspoon ground nutmeg",
    "1/2 teaspoon salt",
    "4 large eggs",
    "1 1/2 cups granulated sugar",
    "1 1/4 cups vegetable oil",
    "1 teaspoon vanilla extract",
    "3 cups grated carrots",
    "1 cup chopped pecans (optional)",
  ],
  howToPrepare: [
    "Preheat your oven to 350°F (180°C) and grease two 9-inch cake pans.",
    "In a medium-sized mixing bowl, whisk together the flour, baking powder, baking soda, cinnamon, nutmeg, and salt.",
    "In a large mixing bowl, beat the eggs until they are light and frothy.",
    "Gradually add in the sugar, oil, and vanilla extract while continuing to beat the mixture until it is well combined.",
    "Stir in the grated carrots and chopped pecans (if using).",
    "Gradually fold the dry ingredients into the wet ingredients until everything is well combined.",
    "Pour the batter evenly into the prepared cake pans and smooth the surface with a spatula.",
    "Bake for approximately 25-30 minutes or until a toothpick inserted into the center of the cake comes out clean.",
    "Remove the cake pans from the oven and let them cool completely before frosting.",
    "For the cream cheese frosting:",
    "In a large mixing bowl, beat the cream cheese and butter until they are light and fluffy.",
    "Gradually add in the powdered sugar and vanilla extract while continuing to beat the mixture until it is smooth and creamy.",
    "Once the cakes have cooled, place one cake layer on a serving plate and spread a generous layer of frosting on top.",
    "Place the second cake layer on top of the frosting and frost the top and sides of the cake with the remaining frosting.",
    "Optional: Garnish the top of the cake with additional chopped pecans or walnuts.",
    "Chill the cake in the refrigerator for at least 30 minutes to set the frosting before serving.",
  ],
  image: "/cake2.png",
};

interface IProps {
  params: {
    id: string;
  };
}

const Recipe: React.FC<IProps> = ({ params }) => {
  return (
    <div className="w-full grid grid-cols-3 gap-x-10 gap-y-16">
      <section className="w-full col-span-3 lg:col-span-2 flex flex-col gap-5">
        <RecipeHeading title={dumbData.title} />
        <img
          src={dumbData.image}
          alt={dumbData.title}
          className="w-full h-[650px] object-cover rounded-2xl drop-shadow-2xl"
        />
      </section>
      <section className="w-full col-span-3 lg:col-span-1 flex flex-col gap-5 justify-center">
        <RecipeDetailsSection
          title={"Ingredients"}
          ingredients={dumbData.ingredient}
        />
        <RecipeFunctionIcons id={params.id} />
      </section>
      <section className="w-full col-span-3 flex flex-col gap-5 justify-center">
        <main className="w-full flex lg:max-w-3xl mx-auto">
          <RecipeDetailsSection
            title={"How to prepare"}
            ingredients={dumbData.howToPrepare}
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
