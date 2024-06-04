import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const Signin = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInStart());
    const formData = {
      email: email.current.value.trim(),
      password: password.current.value.trim(),
    };

    if (
      !formData.email ||
      !formData.password ||
      formData.email === "" ||
      formData.password === ""
    ) {
      dispatch(signInFailure("Please fill out all fields"));
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (response.ok) {
        dispatch(signInSuccess(data));
        Navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure(data.message));
    }
  };
  return (
    <div
      className="flex gap-4
     max-w-100vw min-h-screen mt-20 flex-col items-center md:items-start md:flex-row md:justify-center"
    >
      <div className=" mb-10">
        <Link to={"/"} className="text-5xl font-bold ">
          <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            DC Blogs
          </span>
        </Link>
        <p className=" px-2 text-sm mt-5">Welcone back to DC Blogs !</p>
        <div className=" px-2 text-sm">
          In this blog you will be able to access the admin panel free of cost.
        </div>
      </div>
      <div className=" w-96">
        <form
          onSubmit={(event) => onHandleSubmit(event)}
          className="flex flex-col gap-4 mx-3"
        >
          <div>
            <Label value="Email" />
            <TextInput
              ref={email}
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="email"
            />
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              ref={password}
              type="password"
              placeholder="Password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner size="sm" light={true} />
                <span className="pl-2">Loading...</span>
              </>
            ) : (
              "Sign In"
            )}
          </Button>
          <OAuth />
        </form>
        <div className="mt-2 mx-3 text-sm">
          <span> Don't have an account ? </span>
          <Link to={"/sign-up"} className="text-blue-500">
            Sign Up
          </Link>
        </div>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Signin;
