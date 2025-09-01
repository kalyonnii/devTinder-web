import axios from "axios";
import { useState } from "react";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("bunny@gmail.com");
  const [password, setPassword] = useState("Bunny@123");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState();
  const [isLoginForm, setIsLoginFrom] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        // `${BASE_URL}/login`,
        BASE_URL + "/login",

        {
          emailId: emailId,
          password: password
        },
        { withCredentials: true }
      );
      // console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err);
    }
  };

  const handleSignUp = async () => {
    setError("");
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName: firstName,
          lastName: lastName,
          emailId: emailId,
          password: password
        },
        { withCredentials: true }
      );
      console.log(res);
      setShowToast(res?.data);

      setTimeout(() => {
        setShowToast("");
      }, 3000);
      dispatch(addUser(res.data.data));
      return navigate("/profile");
      //   navigate("/login");
    } catch (err) {
      setError(err?.response?.data);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <div className="card bg-base-200 w-96 shadow-sm ">
          <div className="card-body">
            <h2 className="card-title justify-center">
              {isLoginForm ? "Login" : "Sign Up"}
            </h2>
            {!isLoginForm && (
              <>
                <div>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Frist Name</legend>
                    <input
                      type="text"
                      className="input"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </fieldset>
                </div>
                <div>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name</legend>
                    <input
                      type="text"
                      className="input"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </fieldset>
                </div>{" "}
              </>
            )}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID</legend>
                <input
                  type="text"
                  className="input"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password</legend>
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
            </div>
            <div className="text-red-500">{error} </div>
            <div className="card-actions justify-center m-2">
              <button
                className="btn btn-primary"
                onClick={isLoginForm ? handleLogin : handleSignUp}
              >
                {isLoginForm ? "Login" : "Sign Up"}
              </button>
            </div>
            {/* <div className="flex justify-end">
            <Link to="/signup">Sign Up</Link>
          </div> */}

            <p
              className="flex justify-center cursor-pointer"
              onClick={() => setIsLoginFrom((value) => !value)}
            >
              {" "}
              {isLoginForm
                ? "New User? Register Here"
                : "Registered User? Login Here"}
            </p>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>{showToast}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
