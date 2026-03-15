import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home"
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <Router>
      <NavBar/>
        <Home /> 
    </Router>
  );
}

export default App;