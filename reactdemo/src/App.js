import React from 'react';
import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import { Route, Switch,  Redirect,  BrowserRouter  } from 'react-router-dom';
// import login from './components/Login/login';
import SignIn from './components/Login/SignIn'
import searchPage from './components/Search/search'
import productDetailsPage from './components/Product Details Page/productDetailsPage';

function App() {
  return (
    <div className="App">     
      <BrowserRouter>
      <ToastProvider>
      <Switch>
      <Route exact path='/login' component = {SignIn} />
      <Route  path='/search' component = {searchPage} />
      <Route path='/productDetailsPage/:id' component = {productDetailsPage} />     
      <Redirect from='/' to ='/login' />  
      </Switch>
      </ToastProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
