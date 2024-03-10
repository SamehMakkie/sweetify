"use client";
import React, { useState } from "react";
import { storage } from "@/config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import addRecipe from "@/services/addRecipe";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import DRecipeInput from "../DRecipeInput/DRecipeInput";
import RecipeInputsList from "../RecipeInputsList/RecipeInputList";
import editRecipe from "@/services/editRecipe";
import Link from "next/link";

const initialFormData = {
  recipeTitle: "",
  prepTime: "",
  ingredients: [""],
  steps: [""],
};

interface IFormData {
  recipeTitle: string;
  prepTime: string;
  ingredients: string[];
  steps: string[];
}

interface IProps {
  mode: "add" | "edit";
  recipeId?: string;
  currentImageURL?: string;
  currentRecipeData?: IFormData;
}

const RecipeForm: React.FC<IProps> = ({
  mode,
  recipeId = "placeholder",
  currentImageURL = null,
  currentRecipeData = initialFormData,
}) => {
  console.log(currentImageURL);

  const [imageURL, setImageURL] = useState<string | null>(currentImageURL);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>(currentRecipeData);

  const router = useRouter();
  const { idToken } = useAuth();

  const isButtonDisabled = () => {
    if (
      isSubmitting ||
      !imageURL ||
      !formData.recipeTitle ||
      !formData.prepTime
    ) {
      return true;
    }

    // loop over ingredient and steps to make sure if there is any string that is not empty
    for (let i = 0; i < formData.ingredients.length; i++) {
      if (!formData.ingredients[i]) {
        return true;
      }
    }

    for (let i = 0; i < formData.steps.length; i++) {
      if (!formData.steps[i]) {
        return true;
      }
    }

    return false;
  };

  const handleSingleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleListInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    name: "ingredients" | "steps"
  ) => {
    let list = formData[name];
    list[index] = e.target.value;
    setFormData({
      ...formData,
      [name]: list,
    });
  };

  const handleAddInput = (name: "ingredients" | "steps") => {
    let list = formData[name];
    list.push("");
    setFormData({
      ...formData,
      [name]: list,
    });
  };

  const handleDeleteInput = (index: number, name: "ingredients" | "steps") => {
    let list = formData[name];
    list.splice(index, 1);
    setFormData({
      ...formData,
      [name]: list,
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setImageFile(file);
      setImageURL(URL.createObjectURL(event.target.files[0]));
    }
  };

  const uploadImage = async (image: File, fileName: string) => {
    const storageRef = ref(storage, `recipes-images/${fileName}`);
    const uploadTask = await uploadBytesResumable(storageRef, image);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const id = toast.loading(
      mode == "edit" ? "Editing recipe..." : "Adding recipe..."
    );

    if (!imageURL) {
      console.error("Image file is required");
      setIsSubmitting(false);
      return;
    }

    let res;
    let downloadURL = "";
    // upload image
    if (imageFile) {
      downloadURL = await uploadImage(imageFile, formData.recipeTitle);
    } else {
      downloadURL = imageURL;
    }
    if (mode === "add") {
      res = await addRecipe({ idToken, formData, imgURL: downloadURL });
    } else {
      res = await editRecipe({
        idToken,
        id: recipeId,
        formData,
        imgURL: downloadURL,
      });
    }
    if (res.data) {
      toast.update(id, {
        render:
          mode == "edit"
            ? "Recipe edited successfully"
            : "Recipe added successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      router.push("/admin/dashboard/recipes");
    } else {
      toast.update(id, {
        render: res.errMessage,
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      // toast.error(res.errMessage);
      console.log(res.errMessage);

      setIsSubmitting(false);
      setFormData(initialFormData);
    }
  };

  return (
    <main className="w-full flex justify-center items-center">
      {isSubmitting ? (
        <div className="flex p-12 justify-center items-center bg-dark-secondary rounded-3xl drop-shadow-2xl">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="flex flex-col p-12 w-full max-w-2xl gap-10 bg-dark-secondary rounded-3xl drop-shadow-2xl">
          <h2 className="text-primary text-2xl text-center">
            {mode == "edit" ? "Edit Recipe" : "Add Recipe"}
          </h2>
          <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
            {imageURL && (
              <Image
                src={imageURL}
                alt="recipe-image"
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

            <DRecipeInput
              mode="normal"
              name="recipeTitle"
              label="Recipe title"
              placeholder={"Recipe title"}
              value={formData.recipeTitle}
              onChange={handleSingleInputChange}
            />

            <DRecipeInput
              mode="prepTime"
              name="prepTime"
              label="Preparation time"
              placeholder={"180 m"}
              value={formData.prepTime}
              onChange={handleSingleInputChange}
            />

            <RecipeInputsList
              label="Ingredients"
              inputBaseName="ingredients"
              placeholder="Enter ingredient"
              list={formData.ingredients}
              handleInputChange={handleListInputChange}
              handleAddInput={handleAddInput}
              handleDeleteInput={handleDeleteInput}
            />

            <RecipeInputsList
              label="Steps"
              inputBaseName="steps"
              placeholder="Enter ingredient"
              list={formData.steps}
              handleInputChange={handleListInputChange}
              handleAddInput={handleAddInput}
              handleDeleteInput={handleDeleteInput}
            />

            <div className="flex flex-col w-full pt-5 gap-5">
              <Link href="/admin/dashboard/recipes">
                <button type="button" className="w-full btn bg-secondary hover:bg-lighter-dark-secondary border-none text-white rounded-2xl">
                  Return
                </button>
              </Link>
              <button
                type="submit"
                disabled={isButtonDisabled()}
                className="w-full btn btn-primary text-white rounded-2xl disabled:text-white disabled:bg-primary disabled:cursor-not-allowed disabled:opacity-50">
                {mode == "edit" ? "Edit Recipe" : "Add Recipe"}
              </button>
            </div>
          </form>
        </div>
      )}
    </main>
  );
};

export default RecipeForm;
