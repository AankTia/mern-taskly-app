import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import SignIn from "../src/pages/SignIn";
import SignUp from "../src/pages/SignUp";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import Profile from "../src/pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <UserProvider>
      <ChakraProvider value={defaultSystem}>
        <BrowserRouter>
          <NavBar />
          <Toaster position="bottom-right" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </UserProvider>
  );
}
