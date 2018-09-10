import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import css from './dashboard.css';
import Navbar from './navbar/navbar.container';
import Category from './menuManager/category/category.container';
import Product from './menuManager/product/product.container';

class Dashboard extends Component {
    render(){
        return (
            <div className="css.container-fluid">
                <div className="row">
                    <div className="col-md-2"><Navbar /></div>
                    <div className="col-md-10">
                        <Route path="/category" component={Category} />
                        <Route path="/product" component={Product} />
                    </div> 
                </div>   
            </div>

        )
    }
}

export default Dashboard