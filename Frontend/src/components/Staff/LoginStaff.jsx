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
  import { Navbar1 } from "../All/Navbar";
  import { Footer } from "../All/Footer";
  
  
  function LoginStaff() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn]=useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const resp= await axios.post("http://localhost:3001/staff/loginstaff", {
        email,
        password,
      }).then((data) => data.data);
  
     // console.log(resp);
  
      if (resp.status === "ok") {
        alert(resp.message);
        setIsLoggedIn(() => true);
        // navigate('/dashboard', {replace: true});
      } else {
        alert("failed");
      }
      
      
    };
  
    return (
      <>
        <Navbar1/>
        <div className="flex items-center justify-center relative top-[-30px] min-h-screen">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Staff Sign In
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
                
              </CardFooter>
            </form>
          </Card>
        </div>
        <Footer/>
      </>
    );
  }
  export default LoginStaff;
  