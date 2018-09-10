import React, { Component } from "react"

import { Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return (
            <div className="nav-side-menu">
                <div className="brand">Bottle Spinner</div>
                <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
            
                    <div className="menu-list">
            
                        <ul id="menu-content" className="menu-content collapse out">
                                                        
                            <li  data-toggle="collapse" data-target="#merge" className="collapsed">
                                <a href="#"><i className="fa fa-puzzle-piece fa-lg fa-fw sidebar-icon"></i> Merge <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="merge">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Devices</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Groups</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> SIM Cards</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Users</a></li>
                            </ul>
                            
                            <li  data-toggle="collapse" data-target="#menuManager" className="collapsed">
                                <a href="#"><i className="fa fa-sliders fa-lg fa-fw sidebar-icon"></i> Menu Manager <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="menuManager">
                                <li><Link to="/category"><i className="fa fa-angle-double-right"></i> Category</Link></li>
                                <li><Link to="/product"><i className="fa fa-angle-double-right"></i> Product</Link></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> New Addons</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Taxes</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Slot</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Help</a></li>
                            </ul>
                            
                            <li  data-toggle="collapse" data-target="#reach" className="collapsed">
                                <a href="#"><i className="fa fa-cogs fa-lg fa-fw sidebar-icon"></i> Reach <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="reach">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Operation Logs</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Events and Alarms</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Backup and Restore</a></li>
                            </ul>
                            
                            <li  data-toggle="collapse" data-target="#merchantDashboard" className="collapsed">
                                <a href="#"><i className="fa fa-wrench fa-lg fa-fw sidebar-icon"></i> Merchant Dashboard <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="merchantDashboard">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Manual SMS</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Import</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Export</a></li>
                            </ul>
                            
                            <li  data-toggle="collapse" data-target="#userManager" className="collapsed">
                                <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> User Manager <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="userManager">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i className="fa fa-external-link"></i></small></a></li>
                            </ul>

                            <li  data-toggle="collapse" data-target="#payments" className="collapsed">
                                <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Payments <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="payments">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i className="fa fa-external-link"></i></small></a></li>
                            </ul>

                            <li  data-toggle="collapse" data-target="#newOrderOnline" className="collapsed">
                                <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> New Order Online <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="newOrderOnline">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i className="fa fa-external-link"></i></small></a></li>
                            </ul>

                            <li  data-toggle="collapse" data-target="#credits" className="collapsed">
                                <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Credits <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="credits">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i className="fa fa-external-link"></i></small></a></li>
                            </ul>

                            <li  data-toggle="collapse" data-target="#events" className="collapsed">
                                <a href="#"><i className="fa fa-life-ring fa-lg fa-fw sidebar-icon"></i> Events <span className="arrow"></span></a>
                            </li>
                            <ul className="sub-menu collapse" id="events">
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Documentation</a></li>
                                <li><a href="#"><i className="fa fa-angle-double-right"></i> Customer Support <small><i className="fa fa-external-link"></i></small></a></li>
                            </ul>
                        </ul>
                </div>
            </div>

        )
    }
}

export default Navbar