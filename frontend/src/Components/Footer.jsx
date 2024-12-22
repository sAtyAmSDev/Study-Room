import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex xl:w-[1280px] justify-center items-center mx-2 md:mx-10 p-3 border-2 border-gray-700 h-full  relative">
      <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] top-[-17px]  ">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] top-[-17px]">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 left-[-9px] bottom-[-14px]">
        +
      </div>
      <div className="absolute font-extrabold text-[25px] text-gray-400 right-[-9px] bottom-[-14px]">
        +
      </div>

      <div className="w-full flex flex-col  md:flex-row md:justify-between justify-center items-center p-2 md:px-12 lg:px-16  ">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/">
            <a className="hover:text-purple-700">StudyRoom™</a>.
          </Link>{" "}
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {/* <li>
            <Link to="/AboutUs">
              <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
                About
              </a>
            </Link>
          </li> */}

          {/* <li>
            <Link to="/AboutUs">
              <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
                Privacy Policy
              </a>{" "}
            </Link>
          </li> */}
          {/* <li>
          <Link to="/">
            <a className="hover:text-purple-700 me-4 md:me-6 cursor-pointer ">
              Licensing
            </a>
          </Link>
        </li> */}
          {/* <li>
            <Link to="/AboutUs">
              {" "}
              <a className="hover:text-purple-700">Contact</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
