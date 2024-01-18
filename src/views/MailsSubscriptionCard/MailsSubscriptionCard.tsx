"use client";
import React from "react";
import FormsInput from "@/components/FormsInput/FormsInput";
import { MdOutlineEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter a valid email address"),
  })
  .required();

const MailsSubscriptionCard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const data = watch();

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit(handleMailListSignup);
    }
  };

  const handleMailListSignup = async () => {
    const { email } = data;
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 bg-dark-secondary drop-shadow-md rounded-2xl">
      <img
        src="/mails-subscription.png"
        className="w-full h-full object-cover rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
      />
      <form
        noValidate
        className="flex flex-col justify-center gap-5 p-10 sm:p-32 md:p-20 lg:p-28 xl:p-32"
        onSubmit={handleSubmit(handleMailListSignup)}>
        <h2 className="text-3xl sm:text-4xl text-primary">
          Subscribe to our newsletter
        </h2>
        <p className="text-sm sm:text-base text-card-text">
          If you're a foodie looking for delicious and easy-to-make recipes,
          subscribing to our mail letters is the perfect way to stay up-to-date
          with all our latest creations.
        </p>
        <FormsInput
          type="email"
          placeholder="Email"
          leftIcon={<MdOutlineEmail className="text-white" size={24} />}
          msgDetails=""
          register={register("email")}
          handleEnter={handleEnter}
          error={errors.email}
        />
        <button
          type="submit"
          className="btn btn-primary rounded-full inline-block text-white">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default MailsSubscriptionCard;
