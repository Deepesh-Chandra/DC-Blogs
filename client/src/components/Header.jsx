import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/toggleThemeSlice";

const Header = () => {
  const path = useLocation().pathname;
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          DC Blogs
        </span>
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="lg:hidden w-12 h-9 " color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-9 sm:inline" color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {darkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
        </Button>

        {currentUser ? (

          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User"
              img={currentUser.profilePic}
              rounded

            />
          }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {currentUser.username}
              </span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link to={"/dashboard?tab=profile"}>Profile</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to={"/"}>Sign out</Link>
            </Dropdown.Item>
          </Dropdown>

        ):( <Link to={"/sign-in"}>
          <Button gradientDuoTone={"purpleToBlue"} outline>Sign In</Button>
        </Link>)}

       

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"}> Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"}> About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}> Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
