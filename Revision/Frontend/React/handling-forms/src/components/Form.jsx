import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2); // Simulating Network Delay
    let response =  await fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let resText = await response.text();
    console.log(data, resText);

    // if (data.username !== "Apex") {
    //   setError("myForm", {
    //     message:
    //       "Your form is not match with login credentials. Please Try Again",
    //   });
    // }
    // if (data.username === "Jack") {
    //   setError("blocked", {
    //     message: "SORRY, This person is BLOCKED.",
    //   });
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <h2> React Handling Form</h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="">Email Address </label>
        <input placeholder="email address" type="text" name="email" /> */}
        <br />
        <label htmlFor="">Username </label>
        <input
          placeholder="username"
          {...register("username", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 4, message: "Min length is 4" },
            maxLength: { value: 8, message: "Max length is 8" },
          })}
          type="username"
        />
        {errors.username && (
          <div className="red">{errors.username.message} </div>
        )}
        <br />
        <label htmlFor="">Password </label>
        <input
          placeholder="password"
          {...register("password", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 7, message: "Min length of password 7" },
            maxLength: { value: 15, message: "Max length of password 15" },
          })}
          type="password"
        />
        {errors.password && (
          <div className="red">{errors.password.message} </div>
        )}
        <br />
        {/* <input type="submit" value="Submit"/> */}
        <button disabled={isSubmitting}>SUBMIT</button>
        {errors.myForm && <div className="red">{errors.myForm.message} </div>}
        {errors.blocked && <div className="red">{errors.blocked.message} </div>}
      </form>
    </>
  );
};

export default Form;
