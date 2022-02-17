import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TermAndConditionPage from "../pages/TermAndConditionPage";
const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          exact
          path="/term-and-conditions"
          element={<TermAndConditionPage />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default Config;
