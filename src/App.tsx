import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
      {/* <h1 className="text-3xl font-medium underline">Hello world!</h1> */}
    </>
  );
}

export default App;
