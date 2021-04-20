import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home'
import Appointment from "./component/Appointment/Appointment/Appointment";
import Login from "./component/Login/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard/Dashboard";
import AddService from "./component/Dashboard/AddService/AddService";
import Review from "./component/Dashboard/Review/Review";
import PrivateRoute from "./component/Login/PrivateRoute/PrivateRoute";
import BookService from "./component/Dashboard/BookService/BookService";
import ServiceList from "./component/Dashboard/ServiceList/ServiceList";
import Manage from "./component/Dashboard/Manage/Manage";
import MakeAdmin from "./component/Dashboard/MakeAdmin/MakeAdmin";
import AddEngineer from './component/Dashboard/AddEngineer/AddEngineer'
import OrderList from "./component/Dashboard/OrderList/OrderList";
import Menubar from "./component/Shared/Menubar/Menubar";




export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
      {/* <p>{loggedInUser.name}</p> */}
        <Menubar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <PrivateRoute path='/admin'>
            <MakeAdmin/>
          </PrivateRoute>
          <PrivateRoute path='/engineer'>
            <AddEngineer/>
          </PrivateRoute>
          <PrivateRoute path='/orders'>
            <OrderList/>
          </PrivateRoute>
          <Route path='/manage'>
            <Manage/>
          </Route>
          <PrivateRoute path='/serviceList'>
            <ServiceList/>
          </PrivateRoute>
          <Route path='/addService'>
            <AddService/>
          </Route>
          <PrivateRoute path='/service/:_id'>
            <BookService/>
          </PrivateRoute>
          <PrivateRoute path = '/appointment'>
            <Appointment/>
          </PrivateRoute>
          
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/review'>
            <Review/>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard/>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
