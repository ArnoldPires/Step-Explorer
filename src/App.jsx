import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/header/header";
import HomePage from "./pages/homePage/HomePage";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    </Router>
  )
}

export default App