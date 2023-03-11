import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
// import FileUpload from "./components/FileUpload";
import DisplayUser from "./components/DisplayUser";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/fileupload" element={<FileUpload />} /> */}
          <Route path="/display" element={<DisplayUser />} />
          <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
