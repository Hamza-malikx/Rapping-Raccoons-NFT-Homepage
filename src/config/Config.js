import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TermAndConditionPage from "../pages/TermAndConditionPage";
import ScrollToTop from "../component/ScrollToTop";
const Config = () => {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
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
