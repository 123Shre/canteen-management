import { Card, Input, Button, Typography, Div } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar1 } from "../All/Navbar";
import { Footer } from "../All/Footer";

export const RegistrationFormStaffsample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const navigate = useNavigate();
  const jobTitles = {
    kitchenstaff: [
      "Cook",
      "Baker",
      "Dishwasher",
      "Food handler",
      "Kitchen porter",
      "Sous chef",
      "Head chef",
    ],
    fronthouse: [
      "Cashier",
      "Counter staff",
      "Waiter/waitress",
      "Host/hostess",
      "Floor manager",
    ],
    management: [
      "Canteen manager",
      "Assistant canteen manager",
      "Supervisor",
      "Team leader",
    ],
    cleanandmain: ["Cleaner", "Maintenance technician"],
  };
  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    // //   const response = await axios.post(
    // //     "http://localhost:3001/users/register",
    // //     {
    // //       name,
    // //       email,
    // //       password,
    // //     }
    // //   );
    //   // Handle the successful response here.
    //   // const data = response.data;
    //   // Return the data
    //   console.log(response);
    //   // return data;
    // } catch (error) {
    //   // Handle the error here.
    //   console.log(error);
    // }
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

                <Div className="flex flex-col space-y-4">
                  <Input
                    label="Select Department"
                    name="department"
                    value={department}
                    onChange={handleDepartmentChange}
                    className="w-full"
                    as="select"
                  >
                    <option value="kitchenstaff">Kitchen Staff</option>
                    <option value="fronthouse">Front of house Staff</option>
                    <option value="management">Management</option>
                    <option value="cleanandmain">
                      Cleaning and Maintainance Staff
                    </option>
                  </Input>

                  <Input
                    label="Select Job Title"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={handleJobTitleChange}
                    className="w-full"
                    as="select"
                    disabled={!department}
                  >
                    {department &&
                      jobTitles[department].map((jobTitle) => (
                        <option key={jobTitle} value={jobTitle}>
                          {jobTitle}
                        </option>
                      ))}
                  </Input>
                </Div>

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
                // onClick={() => navigate("/login", { replace: true })}
                className="mt-6"
                fullWidth
              >
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?
                {/* <Link to="/login" className="font-medium text-gray-900">
                  Sign In
                </Link> */}
              </Typography>
            </form>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

// export default RegistrationFormStaffsample;
