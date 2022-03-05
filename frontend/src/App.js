import './App.css';
import Signin from './pages/signin'
import Signup from './pages/signup'
import Footer from './component/footer'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App;
