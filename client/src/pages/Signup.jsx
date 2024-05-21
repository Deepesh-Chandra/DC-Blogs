import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
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
         <div>In this blog you will be able to access the admin panel free of cost.</div> 
        </p>
      </div>
      <div className=" w-96">
        <form className="flex flex-col gap-4 mx-3">
          <div>
            <Label value="Username" />
            <TextInput type="text" placeholder="Username" id="username" />
          </div>
          <div>
            <Label value="Email" />
            <TextInput type="text" placeholder="Email" id="email" />
          </div>
          <div>
            <Label value="Password" />
            <TextInput type="text" placeholder="Password" id="password" />
          </div>
          <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
        </form>

        <div className="mt-2 mx-3 text-sm">
          <span>Have an account ? </span>
          <Link to={"/sign-in"} className="text-blue-500">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
