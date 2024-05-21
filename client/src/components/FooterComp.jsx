import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsLinkedin, BsTwitter, BsTwitterX} from "react-icons/bs"
const FooterComp = () => {
  return (
    <Footer className="border border-t-8 border-teal-500">
      <div className="w-full mt-4 px-8">
        <div className="flex justify-between">
          <div>
            <Link
              to={"/"}
              className="self-center text-sm sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                DC Blogs
              </span>
            </Link>
          </div>

          <div className="flex gap-12  ">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">About Us</Footer.Link>
                <Footer.Link href="#">Privace & Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact Me" />
              <Footer.LinkGroup col={true}>
                <Footer.Link
                  href="https://linkedin.com/in/deepesh-chandra-492ab6267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </Footer.Link>
                <Footer.Link
                  href="https://x.com/Deepesh73027381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/Deepesh-Chandra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex w-full justify-between">
          <Footer.Copyright
            href="#"
            by="DC Blogs"
            year={new Date().getFullYear()}
          />

          <div className="flex h-10 gap-4">
            <Footer.Icon
              href="https://github.com/Deepesh-Chandra"
              icon={BsGithub}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://x.com/Deepesh73027381"
              icon={BsTwitterX}
              target="_blank"
              rel="noopener noreferrer"
            />
            <Footer.Icon
              href="https://linkedin.com/in/deepesh-chandra-492ab6267"
              icon={BsLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
