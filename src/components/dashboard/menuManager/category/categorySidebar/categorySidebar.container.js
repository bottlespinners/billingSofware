import React, { Component } from 'react';

class CategorySidebar extends Component {
    render() {
        return (
            <div id="MainMenu">
                <div class="list-group panel">
                <a href="#demo3" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Item 3</a>
                <div class="collapse" id="demo3">
                    <a href="#SubMenu1" class="list-group-item" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i class="fa fa-caret-down"></i></a>
                    <div class="collapse list-group-submenu" id="SubMenu1">
                    <a href="#" class="list-group-item" data-parent="#SubMenu1">Subitem 1 a</a>
                    <a href="#" class="list-group-item" data-parent="#SubMenu1">Subitem 2 b</a>
                    {/* {<a href="#SubSubMenu1" class="list-group-item" data-toggle="collapse" data-parent="#SubSubMenu1">Subitem 3 c <i class="fa fa-caret-down"></i></a>
                    <div class="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu1">
                        <a href="#" class="list-group-item" data-parent="#SubSubMenu1">Sub sub item 1</a>
                        <a href="#" class="list-group-item" data-parent="#SubSubMenu1">Sub sub item 2</a>
                    </div>} */}
                    <a href="#" class="list-group-item" data-parent="#SubMenu1">Subitem 4 d</a>
                    </div>


                    <a href="#SubMenu2" class="list-group-item" data-toggle="collapse" data-parent="#SubMenu2">Subitem 2 <i class="fa fa-caret-down"></i></a>
                    <div class="collapse list-group-submenu" id="SubMenu2">
                    <a href="#" class="list-group-item" data-parent="#SubMenu2">Subitem 2 a</a>
                    <a href="#" class="list-group-item" data-parent="#SubMenu2">Subitem 2 b</a>
                    </div>


                    <a href="javascript:;" class="list-group-item">Subitem 3</a>
                </div>
                <a href="#demo4" class="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Item 4</a>
                <div class="collapse" id="demo4">
                    <a href="" class="list-group-item">Subitem 1</a>
                    <a href="" class="list-group-item">Subitem 2</a>
                    <a href="" class="list-group-item">Subitem 3</a>
                </div>
                </div>
            </div>
        )
    }
}

export default CategorySidebar