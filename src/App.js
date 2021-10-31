import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/hooks/AuthProvider';
import AddBookingService from './components/pages/AddBookingService/AddBookingService';
import BookingDetails from './components/pages/BookingDetails/BookingDetails';
import Contact from './components/pages/Contact/Contact';
import FooterSection from './components/pages/Footer/FooterSection';
import Home from './components/pages/Home/Home';
import Login from './components/pages/Login/Login';
import ManageOrder from './components/pages/ManageOrder/ManageOrder';
import MyOrder from './components/pages/MyOrder/MyOrder';
import MainNav from './components/pages/Navbar/MainNav';
import PageUnavailable from './components/pages/PageUnavailable/PageUnavailable';
import Tour from './components/pages/Tour/Tour';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    
      <AuthProvider>
        <BrowserRouter>
          <MainNav></MainNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addBooking">
              <AddBookingService></AddBookingService>
            </PrivateRoute>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/tour">
              <Tour></Tour>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <PrivateRoute path="/bookingDetails/:Bookid">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <PageUnavailable></PageUnavailable>
            </Route>
          </Switch>
          <FooterSection></FooterSection>
        </BrowserRouter>
      </AuthProvider>
   
  );
}

export default App;
