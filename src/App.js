import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Profile from './pages/auth/Profile';
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Post from './pages/admin/Post';
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
          <Route path='/admin' exact element={ <Dashboard /> } />
          <Route path='/admin/users' exact element={ <Users /> } />
          <Route path='/admin/post' exact element={ <Post /> } />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

