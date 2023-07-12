import "./signIn.css";
import "./signUp.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signin_page">
      <div className="box1">
        <p className="form_heading justify-content-center">
          Create a new account
        </p>
        <form className="form">
          <input
            type="url"
            name="Email"
            placeholder="Email"
            className="inptext"
          />
          <input
            type="text"
            name="First Name"
            placeholder="First Name"
            className="inptext"
          />
          <input
            type="text"
            name="Last name"
            placeholder="Last name"
            className="inptext"
          />
          <input
            type="text"
            name="Username"
            placeholder="Username"
            className="inptext"
          />
          <input
            type="text"
            name="Country"
            placeholder="Country"
            className="inptext"
          />
          <textarea
            id="abt"
            name="About"
            placeholder="Hi, it's me, I am wonderful, it's me!"
            rows={13}
            className="exptxt"
          ></textarea>
          <Link to="/pages/profile"> <input
            type="submit"
            name="Submit"
            className="submitbutton"
          /></Link>
        </form>
        <br></br>
      </div>
    </div>
  );
}
export default SignUp;
