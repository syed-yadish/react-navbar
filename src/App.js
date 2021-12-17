import "./styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Modal } from "./components/Modal";
import React, { useState } from "react";
//React hooks
function App() {
  const [show, setShow] = useState(false); //for modal
  const closeModalHandler = () => setShow(false); //for modal
  return (
    //rendering navbar and modal components
    <>
      <Router>
        <Navbar />
      </Router>
      <div>
        {show ? (
          <div onClick={closeModalHandler} className="back-drop"></div>
        ) : null}
        <button onClick={() => setShow(true)} className="btn-openModal">
          Open Me
        </button>
        <Modal show={show} close={closeModalHandler} />
      </div>
    </>
  );
}
export default App;
