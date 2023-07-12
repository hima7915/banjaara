import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import Explore from "./pages/Explore";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/Experience" element={<Experience />} />
          <Route path="/pages/Explore" element={<Explore />} />
          <Route path="/pages/SignIn" element={<SignIn />} />
          <Route path="/pages/SignUp" element={<SignUp />} />
          <Route path="/pages/Profile" element={<Profile />} />
          <Route path="/pages/Blogs" element={<Blogs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
