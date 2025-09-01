import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const SignUp = () => {
  const [emailId, setEmailId] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [error, setError] = useState();
  const [showToast, setShowToast] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    setError("");
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        password: password
      });
      console.log(res);
      setShowToast(res?.data);
      setTimeout(() => {
        setShowToast("");
      }, 3000);
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
            <h2 className="card-title justify-center">Sign Up</h2>
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
            </div>
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
              <button className="btn btn-primary" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>
            <div className="flex justify-end">
              <Link to="/login">Login </Link>
            </div>
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

export default SignUp;
