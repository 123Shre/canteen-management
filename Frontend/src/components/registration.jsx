import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar1 } from "./All/Navbar";
import { Footer } from "./All/Footer";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/users/register",
        {
          name,
          email,
          password,
        }
      );

      // Handle the successful response here.
      const data = response.data;

      // Return the data
      // console.log(data);
      if (data.status == "ok") {
        <Alert color="green">A success alert for showing message.</Alert>;
        navigate("/login");
      }
      else if(data.status=="failed"){
        <Alert color="green">Email already Registered</Alert>;
      } 
      else {
        <Alert color="red">{data.message}</Alert> ;

     
      }
      // return data;
    } catch (error) {
      // Handle the error here.
      console.log(error);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="flex items-center justify-center min-h-screen">
        <div className="border-black border-2 p-5 rounded-lg">
          <Card color="transparent" className="" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to register.
            </Typography>
            <form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  size="lg"
                  label="Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  size="lg"
                  label="Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                /* onClick={() => navigate("/login", { replace: true })} */
                className="mt-6"
                fullWidth
              >
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?
                <Link to="/login" className="font-medium text-gray-900">
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegistrationForm;
