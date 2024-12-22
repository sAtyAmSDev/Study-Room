import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import MrBot from "./Pages/MrBot";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import GigaScanify from "./Pages/GigaScanify";
import AssignmentSolver from "./Pages/AssignmentSolver";
import QuestionPapers from "./Pages/QuestionPapers";
import CustomQuestionBuilder from "./Pages/CustomQuestionBuilder";
import PDFExplainer from "./Pages/PDFExplainer";
import Features from "./Pages/Features";
// import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/MrBot" element={<MrBot />} />
        <Route path="/GigaScanify" element={<GigaScanify />} />
        <Route path="/AssignmentSolver" element={<AssignmentSolver />} />
        <Route path="/QuestionPapers" element={<QuestionPapers />} />
        <Route
          path="/CustomQuestionBuilder"
          element={<CustomQuestionBuilder />}
        />
        <Route path="/PDFExplainer" element={<PDFExplainer />} />
        {/* <Route path="/Features" element={<Features />} /> */}
        {/* <Route path="/AboutUs" element={<AboutUs />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
