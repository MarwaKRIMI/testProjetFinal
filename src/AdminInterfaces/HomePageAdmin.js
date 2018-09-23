import React from 'react'
import HomePage from '../HomePage';
import {Link} from 'react-router-dom'
import NavbarFeatures from '../NavbarFeatures'
class HomeAdmin extends React.Component{
    render() {
        return <div>
           
            <NavbarFeatures/>
            <Link to="/add-product">
              <div className="btn-container">Add Product</div>
            </Link>
            <HomePage/> </div>

    }
}


export default HomeAdmin