import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Footer />
      </>
    </Router>
  )
}

export default App