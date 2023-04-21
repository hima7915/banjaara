import "./signIn.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [deet, setdeet] = useState({
    username: "",
    password: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setdeet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", deet);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="signin_page">
      <div className="box">
        <p className="form_heading">Sign-in to get your best interests!</p>
        <form>
          <input type="text" name="username" placeholder="Username" className="inptext" onChange={handleChange}/>
          <input type="password" name="password" placeholder="Password" className="inptext" onChange={handleChange}/>
          <input type="submit" name="Submit" className="submitbutton" onClick={handleClick}/>
          {/* <p className="or">or</p>
          <p className="siwg">Sign-in with <img src="/images/google.png" className="google" alt="google"></img></p> */}
          <div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
