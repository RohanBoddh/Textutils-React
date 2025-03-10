import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import Alert from "./Components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#051652";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>

    {/* IT IS FOR ROUTING GITHUB KA LIYA COMMENT KEYA HAI KYU KI GITHUB PER ROUTING SAHI SA NAHI CHALTI */}
    {/* <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <div className="container my-3">
        <Routes>
          <Route exect path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />} />
          <Route exect path="/about" element={<About />} />
        </Routes>
     </div>
    </Router> */}


<Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />
        {/* <About /> */}
     </div>
    </>
  );
}

export default App;
