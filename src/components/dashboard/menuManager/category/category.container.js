import React , { Component } from 'react';

import './category.css';
import CategorySidebar from './categorySidebar/categorySidebar.container';
import CategoryContent from './categoryContent/categoryContent.container';

class Category extends Component {
    render() {
        return (
            <div>
                <div className="addCategoryCss">
                    <button className="btn btn-primary">Add Category</button>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <CategorySidebar />
                    </div>
                    <div className="col-md-9">
                        <CategoryContent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Category