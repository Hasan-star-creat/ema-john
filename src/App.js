import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import Product from './components/Product/Product';
import ProductDettails from './components/ProductDettails/ProductDettails';
import Shipment from './components/Shipment/Shipment';
import LogedIn from './components/LogedIn/LogedIn';

function App() {
  return (
    <Router>
      <Header></Header>

      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/login">
          <LogedIn></LogedIn>
        </Route>
        <Route path="/shipment">
          <Shipment></Shipment>
        </Route>
        <Route path="/product/:productkey">
             <ProductDettails></ProductDettails>
        </Route>
        <Route exact path="/">
          <Shop />
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
