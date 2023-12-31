import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Navbar1() {
  const [openNav, setOpenNav] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row bg-teal-500 lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 bg-teal-500 font-normal"
      >
        <Link to="/setmenu" className="flex items-center">
          SetMenu
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Login
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/register" className="flex items-center">
          Registration
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/docs" className="flex items-center">
          Docs
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="max-h-[768px] w-[calc(100%+48px)] max-w-[99vw] mx-auto relative">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-rose-500">
        <div className="flex items-center justify-between text-blue-gray-900">
          {/* Logo */}
          <div className="flex ">
            <img src="/Image/icon.png" className="w-16 h-10 ml-0 " alt="Icon" />
            <Typography
              as="a"
              href="#"
              className="ml-2 cursor-pointer py-1.5 font-extrabold "
            >
              Annapurna Canteen Services
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Order Now</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-1px h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Ordrer Now</span>
          </Button> */}
          <Button onClick={handleOpen}>Sign In</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
