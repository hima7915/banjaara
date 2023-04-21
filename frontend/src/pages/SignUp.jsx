import "./signIn.css";
import "./signUp.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [deet, setdeet] = useState({
    // email: "",
    username: "",
    password: "",
    name:"",
    // lastname:"",
    // country:"",
    about:""
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setdeet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", deet);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };
  return (
    <div className="signin_page">
      <div className="box1">
        <p className="form_heading">Create a new account</p>
        <form className="form">
          {/* <input
            type="url"
            name="email"
            placeholder="Email"
            className="inptext"
            onChange={handleChange}
          /> */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="inptext"
            onChange={handleChange}
          />
          {/* <input
            type="text"
            name="lastname"
            placeholder="Last name"
            className="inptext"
            onChange={handleChange}
          /> */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="inptext"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inptext"
            onChange={handleChange}
          />
          {/* <input
            type="text"
            name="country"
            placeholder="Country"
            className="inptext"
            onChange={handleChange}
          /> */}
          <textarea
            id="abt"
            name="about"
            placeholder="Hi, it's me, I am wonderful, it's me!"
            rows={13}
            className="exptxt"
            onChange={handleChange}
          ></textarea>
          <input type="submit" name="Submit" className="submitbutton" onClick={handleClick}/>
        </form>
        <br></br>
      </div>
    </div>
  );
}
export default SignUp;
