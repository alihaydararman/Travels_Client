

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import LoginToggle from './Components/Login/LoginToggle/LoginToggle';
import Dashboard from './Components/Dashboard/Dashboard'
import TravelsDetails from './Components/Home/Travelers/TravelsDetails/TravelsDetails';
import TravelPost from "./Components/Home/TravelPost/TravelPost";
import PrivateRoute from "./Components/Login/LoginToggle/PrivateRoute/PrivateRoute";
import Travels from "./Components/Home/Trevels/Trevels";




function App() {

  return (
    <div className="App container">

      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/travels'>
              <Travels></Travels>
            </Route>

            <PrivateRoute path='/travelsDetails/:id'>
              <TravelsDetails></TravelsDetails>
            </PrivateRoute>
            <Route exact path='/login'>
              <LoginToggle />
            </Route>
            <PrivateRoute exact path='/travelPost'>
              <TravelPost />
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>

          </Switch>
        </Router>


      </AuthProvider>




    </div>
  );
}

export default App;
