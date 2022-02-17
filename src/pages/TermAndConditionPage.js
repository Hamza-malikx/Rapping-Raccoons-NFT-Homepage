import React from "react";
import Header from "../component/header/Header";
import Terms from "../component/termAndCond/Terms";
import Footer from "../component/footer/Footer";
const TermAndConditionPage = () => {
  return (
    <div className="term-and-cond-wrapper">
      <Header />
      <Terms />
      <Footer />
    </div>
  );
};

export default TermAndConditionPage;
