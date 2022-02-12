import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';
import Auth from './hoc/auth';


function App() {
  const NewLandingPage = Auth(LandingPage, null)
  const NewLoginPage = Auth(LoginPage, false)
  const NewRegisterPage = Auth(RegisterPage, false)

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div style={{ paddingTop: '0px', minHeight: 'calc(100vh - 80px)' }}>
        <Router>
        <NavBar />
          <Routes>
            <Route exact path="/" element={<NewLandingPage/>}></Route>
            <Route exact path="/login" element={<NewLoginPage/>}></Route>
            <Route exact path="/register" element={<NewRegisterPage/>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
