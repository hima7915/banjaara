import "./signIn.css";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div className="signin_page">
      <div className="box">
        <p className="form_heading">Sign-in to get your best interests!</p>
        <form>
          <input
            type="text"
            name="Username"
            placeholder="Username"
            className="inptext"
          />
          <input
            type="text"
            name="Password"
            placeholder="Password"
            className="inptext"
          />
          <input type="submit" name="Submit" className="submitbutton" />
          <p className="or">or</p>
          <p className="siwg">
            Sign-in with{" "}
            <img src="/images/google.png" className="google" alt="google"></img>
          </p>
          <p className="or">or</p>
          <Link to="/pages/SignUp">
            <p className="or">Create new account</p>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default SignIn;
