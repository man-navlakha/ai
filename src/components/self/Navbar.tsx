// import Link from "next/link";
import eye from "../../assets/view.png";
import { ModeToggle } from "../mode-toggle";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/magicui/terminal";
import Sidebar from "./sidebar";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  
  const handleClick = () => {
    // Perform some logic here, e.g., validation.
    const isValid = true; // Replace with your actual validation

    if (isValid) {
      navigate('/login');
    } else {
      alert('Invalid input!');
    }
  };
  return (
  <>
    <div className="flex items-center justify-between bg-white/30 dark:bg-black/30 dark:text-white text-black p-4 mx-auto max-w-screen-lg backdrop-blur-sm">
         
      <div  className="flex-1 items-center">
        <img src={eye} width="50px" alt="Website Logo" className="mr-2 " />
      </div>
      <Button variant="outline" className="mx-2" onClick={handleClick}>
      Login/Signup
    </Button>
      <ModeToggle />
    </div>
  </>
  );
};

export default Navbar;