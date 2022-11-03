import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Profile from './pages/auth/Profile';
// import Register from './pages/auth/Register';
//import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          {/* Se espcifica la accion a ejecutar o la ruta a donde ir */}
          <Route path='/' exact element={ <Home /> } />
          <Route path='/login' exact element={ <Login /> } />
          <Route path='/register' exact element={ <Register /> } />
          <Route path='/profile' exact element={ <Profile /> } />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
