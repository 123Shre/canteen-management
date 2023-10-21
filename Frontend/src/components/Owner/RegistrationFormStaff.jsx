import { Input, Button, Typography, Alert } from "@material-tailwind/react";
import { useState } from "react";
import { Navbar1 } from "../All/Navbar";
import { Footer } from "../All/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

const RegistrationFormStaff = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !address ||
      !dob ||
      !gender ||
      !department ||
      !startDate ||
      !password
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/admin/registerStaff",
        {
          name,
          email,
          phoneNumber,
          address,
          dob,
          gender,
          department,
          startDate,
          password,
        }
      );
      console.log(response);
      const data = response.data;
      // Handle the successful response
      // ...
      console.log(data);
      if (data.status == "ok") {
        <Alert color="green">A success alert for showing message.</Alert>;
        // navigate("/login");
      } else {
        alert(data.message);
      }
      // Navigate to the login page
      // navigate("/login", { replace: true });
    } catch (error) {
      // Handle the error
      // ...
      console.log(error);
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="mt-1" >
        <div className="flex items-center justify-center min-h-screen ">
          <div className="border-black border-2 p-5 rounded-lg">
            <Typography variant="h4" color="red">
              Staff Registration
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="flex flex-col gap-6">
                <Input
                  label="Name"
                  size="lg"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Email"
                  size="lg"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  label="Phone Number"
                  size="lg"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Input
                  label="Address"
                  size="lg"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <Input
                  label="Date of Birth"
                  size="lg"
                  name="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
                <Input
                  label="Gender"
                  size="lg"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <Input
                  label="Department"
                  size="lg"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
                <Input
                  label="Start Date"
                  size="lg"
                  name="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                  label="Password"
                  size="lg"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" className="mt-6">
                  Register
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?
                  <Link to="/loginstaff" className="font-medium text-gray-900">
                    Sign In
                  </Link>
                </Typography>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default RegistrationFormStaff;
