"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import RecipeInputsList from "@/views/Admin/Dashboard/Recipes/RecipeInputsList/RecipeInputsList";
import DashboardRecipePrepTime from "../../FormsInput/DashboardAddRecipeInput/DashboardRecipePrepTime/DashboardRecipePrepTime";

interface DataProps {
  id: string;
  recipeName: string;
  prepTime: number;
  ingredients: string[];
  steps: string[];
}

interface IProps {
  id: string;
  recipeName: string;
}

const EditRecipeModal: React.FC<IProps> = ({ id, recipeName }) => {
  const [initialData, setInitialData] = useState<DataProps | null>();
  const [image, setImage] = useState<string | null>(null);
  const [ingredientsNames, setIngredientsNames] = useState<string[]>([
    "ingredients-0",
  ]);
  const [stepsNames, setStepsNames] = useState<string[]>(["steps-0"]);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const prepTime = formData.get("prep-time");
      const ingredients = ingredientsNames.map((name) => formData.get(name));
      const steps = stepsNames.map((name) => formData.get(name));

      console.log(prepTime);
      console.log(ingredients);
      console.log(steps);

      // clear form inputs and reset states to initial values
      formRef.current.reset();
      setIngredientsNames(["ingredients-0"]);
      setStepsNames(["steps-0"]);

      // close modal
      (
        document.getElementById("add-recipe-modal") as HTMLDialogElement
      ).close();
    }
  };

  useEffect(() => {
    // fetch recipe data from server
    const fetchRecipeData = async () => {
      try {
        // const response = await fetch(`/api/recipes/${id}`);
        // const data = await response.json();
        const data = {
          id: id,
          recipeName: recipeName,
          prepTime: 180,
          ingredients: ["flour", "sugar", "eggs", "butter"],
          steps: ["step 1", "step 2", "step 3"],
        };

        // get the length of the ingredients and steps arrays
        const ingredientsLength = data.ingredients.length;
        const stepsLength = data.steps.length;
        // create an array of the same length as the ingredients array
        const ingredientsNames = Array.from(
          { length: ingredientsLength },
          (_, i) => `ingredients-${i}`
        );
        // create an array of the same length as the steps array
        const stepsNames = Array.from(
          { length: stepsLength },
          (_, i) => `steps-${i}`
        );
        // set the state of the ingredients and steps arrays
        setIngredientsNames(ingredientsNames);
        setStepsNames(stepsNames);
        setInitialData(data);

        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipeData();
  }, []);

  useEffect(() => {
    if (initialData) {
      // use the formRef to set the values of the form inputs
      if (formRef.current) {
        const form = formRef.current;
        form["prep-time"].value = initialData.prepTime;
        ingredientsNames.forEach((name, index) => {
          form[name].value = initialData.ingredients[index];
        });
        stepsNames.forEach((name, index) => {
          form[name].value = initialData.steps[index];
        });
      }
    }
  }, [initialData]);

  return (
    <dialog id={`edit-recipe-modal-${id}`} className="modal">
      <div className="flex flex-col gap-10 modal-box bg-dark-secondary rounded-2xl drop-shadow-2xl">
        <div className="flex flex-col gap-3">
          <h2 className="text-primary text-2xl text-center">Edit Recipe</h2>
          <p className="text-body-text text-center">{recipeName}</p>
        </div>
        <form method="dialog" className="flex flex-col gap-7" ref={formRef}>
          {image && (
            <Image
              src={image}
              alt="cake"
              width={300}
              height={300}
              className="w-full rounded-3xl"
            />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered file-input-primary file:text-white bg-dark-secondary text-card-text w-full max-w-xs"
          />

          <DashboardRecipePrepTime
            label="Preparation time"
            inputName={"prep-time"}
            placeholder={"180 m"}
          />

          <RecipeInputsList
            label="Ingredients"
            inputName="ingredients"
            placeholder="Enter ingredient"
            inputNames={ingredientsNames}
            setInputNames={setIngredientsNames}
          />

          <RecipeInputsList
            label="Steps to make"
            inputName="steps"
            placeholder="Enter step"
            inputNames={stepsNames}
            setInputNames={setStepsNames}
          />

          <div className="flex flex-col w-full gap-5">
            <button className="w-full btn btn-secondary text-white">
              close
            </button>
            <button
              className="w-full btn btn-primary text-white"
              onClick={handleSubmit}>
              Add Recipe
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default EditRecipeModal;
