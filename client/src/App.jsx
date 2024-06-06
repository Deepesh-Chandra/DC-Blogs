import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import FooterComp from "./components/FooterComp";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
