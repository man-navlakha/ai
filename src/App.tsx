
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/home';
import Login from './components/self/auth/Login';
import Signup from './components/self/auth/Signup';
import ForgetPass from './components/self/auth/Forget-password';
import Otp from './components/self/auth/Otp';

// import { Pointer } from "@/components/magicui/pointer";

function App() {

  return (
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className='dark:bg-black bg-white h-screen'>
      
  <Router>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/forget" element={<ForgetPass />} />
      <Route path="/verify" element={<Otp />} />
    </Routes>
</Router>
   
    </div>
      </ThemeProvider>
  );
}

export default App;
