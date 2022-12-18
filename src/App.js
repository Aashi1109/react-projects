import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path='/' excat>
          <Redirect to="/welcome"></Redirect></Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
