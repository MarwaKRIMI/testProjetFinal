import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import ProductItem from "./ProductItemDisplay";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import LogIn from "./LoginInterface/login";
import HomeAdmin from './AdminInterfaces/HomePageAdmin'
import HomeUser from './UserInterfaces/HomePageUser'
import SignUp from "./SignUpInterface/signup";
import ExploreClubPeinture from "./ExploreClubPeinture"
import ExploreClubMusic from "./ExploreClubMusic"
import ExploreClubAerobic from "./ExploreClubAerobic"
import ExploreClubGymnastic from "./ExploreClubGymnastic"
import ExploreClubBasket from "./ExploreClubBasket"
import ExploreClubInformatique from "./ExploreClubInformatique";
class Routes extends React.Component {
  render() {
    return (
      <div>
          <Route exact path="/" render={() => <LogIn/>} />
        <Route exact path='/home-admin' render={() => <HomeAdmin/>}/>
        <Route exact path='/home-user' render={() => <HomeUser/>}/>
        <Route exact path='/inscription'  render={() => <SignUp/>}/>
       {/* <Route exact path="/" render={() => <HomePage />} /> */}
        <Route
          exact
          path="/products/:name"
          render={props => (
            <ProductItem
              name={props.match.params.name}
              data={this.props.data}
            />
          )}
        />
        <Route
          exact
          path="/edit-page/:name"
          render={props => <EditProduct name={props.match.params.name} />}
        />
        <Route exact path="/add-product" component={AddProduct} />
        <Route exact path="/explore-club/:name" component={ExploreClubInformatique}/>
      </div>
    );
  }
}
export default Routes;
