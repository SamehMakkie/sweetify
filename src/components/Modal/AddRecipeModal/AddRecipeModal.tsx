"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import RecipeInputsList from "@/views/Admin/Dashboard/Recipes/RecipeInputsList/RecipeInputsList";
import DashboardRecipePrepTime from "../../FormsInput/DashboardAddRecipeInput/DashboardRecipePrepTime/DashboardRecipePrepTime";

const AddRecipeModal = () => {
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

  return (
    <dialog id="add-recipe-modal" className="modal">
      <div className="flex flex-col gap-10 modal-box bg-dark-secondary rounded-2xl drop-shadow-2xl">
        <h2 className="text-primary text-2xl text-center">Add Recipe</h2>
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

export default AddRecipeModal;
