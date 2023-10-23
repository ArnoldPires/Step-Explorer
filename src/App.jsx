import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import ViewTrail from './pages/viewTrail/ViewTrail';
import HikeGuide from "./pages/hikeGuide/HikeGuide";
import HikeSearch from "./pages/hikeSearch/HikeSearch";
import CreateTrail from "./pages/createTrail/createTrail";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import Footer from "./components/footer/footer";
import Test from "./pages/test";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ViewTrail" element={<ViewTrail />} />
          <Route path="/HikeGuide" element={<HikeGuide />} />
          <Route path="/HikeSearch" element={<HikeSearch />} />
          <Route path="/CreateTrail" element={<CreateTrail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;