/* eslint-disable no-unused-vars */
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import NotFoundPage from './components/404/NotFoundPage';
import Footer from './components/Footer/Footer';
import SingleCourse from './components/SingleCourse/SingleCourse';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import LoginWithPhone from './components/Login/LoginWithPhone';
import Register from './components/Login/Register';



export const AuthContext = createContext();
// eslint-disable-next-line no-unused-vars

// const analytics = getAnalytics(firebaseApp);
function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <Route exact path='/courses'>
              <Courses></Courses>
            </Route>
            <Route exact path="/features">
              <Features></Features>
            </Route>
            <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/loginWithPhone">
              <LoginWithPhone></LoginWithPhone>
            </Route>

            <Route exact path='/courses/:courseID'>
              <SingleCourse></SingleCourse>
            </Route>
            <Route path="/*">
              <NotFoundPage></NotFoundPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
