import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Navbar1 } from "./All/Navbar";
import { Footer } from "./All/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios
      .post("http://localhost:3001/users/login", {
        email,
        password,
      })
      .then((data) => data.data);

    console.log(resp);

    if (resp.status === "ok") {
      sessionStorage.setItem("user", JSON.stringify(resp.data));
      console.log(resp.data);
      sessionStorage.setItem("user", JSON.stringify(resp.data));
      alert(resp.message);
      setIsLoggedIn(() => true);
      navigate("/dish2", { replace: true });
    } else {
      alert("failed");
    }
  };

  return (
    <>
      <div className="bg-teal-500">
        <Navbar1 />
        <div className="flex  items-center justify-center relative top-[-30px] min-h-screen">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <CardBody className="flex flex-col gap-4">
                <Input
                  label="Email"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  label="Password"
                  size="lg"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </CardBody>
              <CardFooter className="pt-0">
                <Button type="submit" variant="gradient" fullWidth>
                  Sign In
                </Button>
                <Typography
                  variant="small"
                  className="mt-6 flex justify-center"
                >
                  Don&apos;t have an account?
                  <Link
                    to="/register"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Link>
                </Typography>
              </CardFooter>
            </form>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Login;
