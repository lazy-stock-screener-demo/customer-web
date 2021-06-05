import React, { useEffect, ReactElement } from "react";
import { useForm } from "react-hook-form";

export const useSigninForm = ({ handleSignin }) => {
  const { register, handleSubmit, setValue, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleSignin(data);
  };

  const handleCustomerNameChange = (e) => {
    setValue("userName", e.target.value);
  };

  const handleCustomerPWDChange = (e) => {
    setValue("userPWD", e.target.value);
  };

  useEffect(() => {
    register("userName", {
      required: "First name is required.",
      pattern: {
        value: /\w+/,
        message: "This input pattern is wrong.",
      },
    });
    register("userPWD", {
      required: "This password is required.",
    });
  }, [register]);
  return {
    handleSubmit,
    onSubmit,
    handleCustomerNameChange,
    handleCustomerPWDChange,
    errors,
  };
};
