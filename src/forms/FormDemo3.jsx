import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    console.log("data...", data);
  };

  console.log("errors...", errors);

  const validationSchema = {
    age: {
      required: {
        value: true,
        message: "Age is required*",
      },
      min: {
        value: 18,
        message: "Age should be greater than 18",
      },
      max: {
        value: 60,
        message: "Age should be less than 60",
      },
    },
    add:{
        required: {
            value: true,
            message: "Address is required*",
        },
        minLength: {
            value: 10,
            message: "Address should be greater than 10",
        },
        maxLength: {
            value: 100,
            message: "Address should be less than 100",
        }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input
            type="text"
            {...register("name", {
              required: { value: true, message: "Name is required*" },
            })}
          ></input>
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>age</label>
          <input type="text" {...register("age", validationSchema.age)}></input>
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
            <label>ADDRESS</label>
            <input type="text" {...register("address",validationSchema.add)}></input>
            {
                errors.address && <span>{errors.address.message}</span>
            }
        </div>
        <div>
          <input type="submit" value="SUBMIT"></input>
        </div>
      </form>
    </div>
  );
};
