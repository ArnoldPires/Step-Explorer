import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import HikeGuide from "./pages/hikeGuide/HikeGuide";
import HikeSearch from "./pages/hikeSearch/HikeSearch";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/HikeGuide" element={<HikeGuide />} />
          <Route path="/pages/HikeSearch" element={<HikeSearch />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;