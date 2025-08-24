import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-3xl font-medium underline">Hello world!</h1> */}
    </>
  );
}

export default App;
