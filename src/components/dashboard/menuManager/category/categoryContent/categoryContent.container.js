import React, { Component } from 'react';

import '../category.css';

class CategoryContent extends Component {
    render() {
        return (
            <div>
                <div>
                    <button className="btn btn-primary editBtnCss">Edit</button>
                    <h3>Details</h3>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label for="name">Name</label>
                        <p id="name"> Salads </p>
                    </div>
                    <div className="col-md-6">
                        <label for="desc">Description</label>
                        <p id="desc"> No Description available </p>
                    </div>
                </div><br/><br/>
                <div className="row">
                    <div className="col-md-6">
                        <label for="discount">Discount Exempted</label>
                        <p id="discount"> No </p>
                    </div>
                    <div className="col-md-6">
                        <label for="type">Type</label>
                        <p id="type"> None </p>
                    </div>
                </div><br/><br/>
                <div>
                    <h3>Availability</h3>
                    <hr/>
                </div>
                <div className="row">
                    <ul>
                        <li>Dine In</li>
                        <li>Delivery</li>
                        <li>Take Away</li>
                    </ul>
                </div><br/><br/>
                <div>
                    <h3>Danger Zone</h3>
                    <hr/>
                </div>
                <div>
                    <h3>Delete</h3>
                    <p>Once you delete a category, every product associated to it will be deleted. if you delete this category, there is no going back. Please be certain.</p>
                    <button className="btn btn-danger editBtnCss">Delete</button>
                </div>
            </div>
        )
    }
}

export default CategoryContent