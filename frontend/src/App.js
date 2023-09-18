import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from './components/shared/Navigation/Navigation'
import Home from './pages/Home/Home';
import Authenticate from "./pages/Authenticate/Authenticate"
import Activate from "./pages/Activate/Activate"
import Rooms from "./pages/Rooms/Rooms"
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';

const isAuth = false;
const user = { activated: false }

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      {/* Guest Route - If your is not logged in */}
      <Routes>
        <Route path="/" element={isAuth ? <Navigate to={{ pathname: '/rooms' }} /> : <Home />} />
      </Routes>
      <Routes>
        <Route path="/authenticate" element={isAuth ? <Navigate to={{ pathname: '/rooms' }} /> : <Authenticate />} />
      </Routes>
      {/* Semi Protected Route - If user is logged in but do not have activated account */}
      <Routes>
        <Route path="/activate" element={!isAuth ? <Navigate to={{ pathname: '/', }} /> : isAuth && !user.activated ? <Activate /> : <Navigate to={{ pathname: '/rooms' }} />} />
      </Routes>
      {/* Protected Route - user in logged in and has activated account */}
      <Routes>
        <Route path="/rooms" element={!isAuth ? <Navigate to={{ pathname: '/' }} /> : isAuth && !user.activated ? <Navigate to={{ pathname: '/activate' }} /> : <Rooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
