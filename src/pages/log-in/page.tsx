import Input from "../../components/input";
import "../../styles/pages/log-in/log-in.css";

export default function LogIn() {
  return (
    <div className="log-in-container">
      {/* HEADER */}
      <div className="log-in-header">
        <h2>Welcome, please login</h2>
        <p className="log-in-suggestion">
          Don&apos;t have an account?{" "}
          <a href="/sign-up" className="log-in-link">
            Sign up
          </a>
        </p>
      </div>
      <form className="log-in-form-container">
        {/* INPUT COMPONENTS */}
        <div className="log-in-input-container">
          {/* EMAIL FIELD*/}

          <Input
            placeholder="Enter your email address"
            htmlFor="email"
            label="What's your email address?"
            type="email"
            name="email"
            id="email"
          />
          {/* FIRST PASSWORD FIELD */}
          <div className="log-in-password-container">
            <Input
              placeholder="Enter your password"
              htmlFor="password"
              label="Create a password"
              type="password"
              name="password"
              id="password"
            />
            <p className="log-in-privacy-policy">Forgot Password?</p>
          </div>
        </div>
        <div className="log-in-submit-container">
          <button className="log-in-submit-button" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
