import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import HikeGuide from "./pages/hikeGuide/HikeGuide";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pages/HikeGuide" element={<HikeGuide />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;