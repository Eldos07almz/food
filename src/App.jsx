import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import FoodPage from "./pages/FoodPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<FoodPage />} />
      </Routes>
    </>
  );
}

export default App;
