import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/Dashboard';
import CreatePost from './pages/admin/post/CreatePost';
import EditPost from './pages/admin/post/EditPost';
import Posts from './pages/admin/post/Posts';
import ViewPost from './pages/admin/post/ViewPost';

import CreatePet from './pages/admin/pet/CreatePet';
import EditPet from './pages/admin/pet/EditPet';
import Pets from './pages/admin/pet/Pets';
import ViewPet from './pages/admin/pet/ViewPet';

import CreateStore from './pages/admin/store/CreateStore';
import EditStore from './pages/admin/store/EditStore';
import Stores from './pages/admin/store/Stores';
import ViewStore from './pages/admin/store/ViewStore';

import CreateUser from './pages/admin/user/CreateUser';
import Users from './pages/admin/user/Users';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';
import Register from './pages/auth/Register';
import Home from './pages/Home';


// import Register from './pages/auth/Register';
//import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/login' exact element={ <Login /> } />
          <Route path='/register' exact element={ <Register /> } />
          <Route path='/profile' exact element={ <Profile /> } />

          <Route path='/admin' exact element={ <Dashboard /> } />
          <Route path='/admin/users' exact element={ <Users /> } />
          <Route path='/admin/users/create' exact element={ <CreateUser /> } />

          <Route path='/admin/posts' exact element={ <Posts /> } />
          <Route path='/admin/posts/view/:id' exact element={ <ViewPost /> } />
          <Route path='/admin/posts/create' exact element={ <CreatePost /> } />
          <Route path='/admin/posts/edit/:id' exact element={ <EditPost /> } />

          <Route path='/admin/pets' exact element={ <Pets /> } />
          <Route path='/admin/pets/view/:id' exact element={ <ViewPet /> } />
          <Route path='/admin/pets/create' exact element={ <CreatePet /> } />
          <Route path='/admin/pets/edit/:id' exact element={ <EditPet /> } />

          <Route path='/admin/stores' exact element={ <Stores /> } />
          <Route path='/admin/stores/view/:id' exact element={ <ViewStore /> } />
          <Route path='/admin/stores/create' exact element={ <CreateStore /> } />
          <Route path='/admin/stores/edit/:id' exact element={ <EditStore /> } />

        </Routes>
      </Router>
    </Fragment>
  );
}


export default App;
