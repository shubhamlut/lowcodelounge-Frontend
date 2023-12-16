import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import MyLearning from "./components/MyLearning";
import AccountSettings from "./components/AccountSettings";
import Help from "./components/Help";
import Logout from "./components/Logout";
import Blog from "./components/Blog";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/accountSetting" element={<AccountSettings />} />
        <Route path="/help" element={<Help />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/listcourses" element={<Logout />} />
        <Route path="/course" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
