import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import OAuth from "../components/OAuth";

const Signup = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const Navigate=useNavigate();

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      username: username.current.value.trim(),
      email: email.current.value.trim(),
      password: password.current.value.trim(),
    };

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      formData.username === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      return setErrorMessage("All fields are required");
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch("http://localhost:3000/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (response.ok) {
        Navigate("/sign-in");
      }
    } catch (error) {
      setErrorMessage("Failed to sign up. Please try again later.");
      setLoading(false);
    }
  };
  return (
    <div className="flex max-w-100vw min-h-screen mt-20 flex-col items-center md:items-start md:flex-row md:justify-center">
      <div className=" mb-10">
        <Link to={"/"} className="text-5xl font-bold ">
          <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            DC Blogs
          </span>
        </Link>
        <p className=" px-2 text-sm mt-5">
          This is my first MERN project. SignUp to get started.
        </p>
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
            <Label value="Username" />
            <TextInput
              ref={username}
              type="text"
              placeholder="Username"
              id="username"
              autoComplete="username"
            />
          </div>
          <div>
            <Label value="Email" />
            <TextInput ref={email} type="email" placeholder="Email" id="email" autoComplete="email"/>
          </div>
          <div>
            <Label value="Password" />
            <TextInput
              ref={password}
              type="password"
              placeholder="Password"
              id="password"
              autocomplete="current-password"
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
              "Sign Up"
            )}
          </Button>
          <OAuth/>
        </form>

        <div className="mt-2 mx-3 text-sm">
          <span>Have an account ? </span>
          <Link to={"/sign-in"} className="text-blue-500">
            Sign In
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

export default Signup;
