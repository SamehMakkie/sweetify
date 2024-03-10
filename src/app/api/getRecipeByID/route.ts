// const dumbData = {
//   id: "1",
//   title: "Recipe name",
//   prepTime: 100,
//   ingredient: [
//     "2 cups all-purpose flour",
//     "2 teaspoons baking powder",
//     "1 1/2 teaspoons baking soda",
//     "1 1/2 teaspoons ground cinnamon",
//     "1/2 teaspoon ground nutmeg",
//     "1/2 teaspoon salt",
//     "4 large eggs",
//     "1 1/2 cups granulated sugar",
//     "1 1/4 cups vegetable oil",
//     "1 teaspoon vanilla extract",
//     "3 cups grated carrots",
//     "1 cup chopped pecans (optional)",
//   ],
//   howToPrepare: [
//     "Preheat your oven to 350°F (180°C) and grease two 9-inch cake pans.",
//     "In a medium-sized mixing bowl, whisk together the flour, baking powder, baking soda, cinnamon, nutmeg, and salt.",
//     "In a large mixing bowl, beat the eggs until they are light and frothy.",
//     "Gradually add in the sugar, oil, and vanilla extract while continuing to beat the mixture until it is well combined.",
//     "Stir in the grated carrots and chopped pecans (if using).",
//     "Gradually fold the dry ingredients into the wet ingredients until everything is well combined.",
//     "Pour the batter evenly into the prepared cake pans and smooth the surface with a spatula.",
//     "Bake for approximately 25-30 minutes or until a toothpick inserted into the center of the cake comes out clean.",
//     "Remove the cake pans from the oven and let them cool completely before frosting.",
//     "For the cream cheese frosting:",
//     "In a large mixing bowl, beat the cream cheese and butter until they are light and fluffy.",
//     "Gradually add in the powdered sugar and vanilla extract while continuing to beat the mixture until it is smooth and creamy.",
//     "Once the cakes have cooled, place one cake layer on a serving plate and spread a generous layer of frosting on top.",
//     "Place the second cake layer on top of the frosting and frost the top and sides of the cake with the remaining frosting.",
//     "Optional: Garnish the top of the cake with additional chopped pecans or walnuts.",
//     "Chill the cake in the refrigerator for at least 30 minutes to set the frosting before serving.",
//   ],
//   image: "/cake2.png",
// };

const dumbIngredients = [
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
];

const steps = [
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
];

const dumbData = [
  {
    id: "1",
    name: "Carrot Cake with Cream Cheese Frosting",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 10,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "2",
    name: "Chocolate Chip Cookie Dough Brownies",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 20,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "3",
    name: "Strawberry Cheesecake Ice Cream",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 30,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "4",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "5",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "6",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "7",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "8",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
  {
    id: "9",
    name: "Lemon Blueberry Layer Cake",
    imageSrc: "/cake2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    preparationTime: 40,
    ingredients: dumbIngredients,
    howToPrepare: steps,
  },
];

export async function POST(req: Request) {
  const body = await req.json();

  const id = body.id;
  // return the recipe with the requested id
  const recipe = dumbData.find((recipe) => recipe.id === id);
  if (!recipe) {
    return new Response("Recipe not found", {
      status: 404,
    });
  }
  return new Response(JSON.stringify(recipe), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
