import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ()=>{

    return(
        
        
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                
                <div className="container">

                    <Link href="javascript:void(0);" className="navbar-brand">
                        <img src="https://www.pngall.com/wp-content/uploads/15/Jira-Logo-Transparent.png" width="40" alt="sitelogo" />
                        <span className="d-none d-md-inline ms-2">PTT Project Co.,Ltd</span>
                    </Link>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="nav" className="navbar-collapse collapse justify-content-between">

                        <ul className="navbar-nav">
                            <li className="nav-item"><Link href="#" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link href="#clients" className="nav-link">Clients</Link></li>
                            <li className="nav-item"><Link href="#about" className="nav-link">About</Link></li>
                            <li className="nav-item btn-group">
                                <Link href="#software" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Software <FontAwesomeIcon icon="fa-solid fa-caret-down" /></Link>
                                <ul className="dropdown-menu">
                                    <li><Link href="javascript:void(0);" className="dropdown-item">Android App</Link></li>
                                    <li><Link href="javascript:void(0);" className="dropdown-item">IOS App</Link></li>
                                    <li><Link href="javascript:void(0);" className="dropdown-item">Linux App</Link></li>
                                    <li><Link href="javascript:void(0);" className="dropdown-item">Windows App</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"><Link href="#pricing" className="nav-link">Pricing</Link></li>
                            <li className="nav-item"><Link href="#contact" className="nav-link">Contact</Link></li>
                        </ul>
                    

                        <div className="">
                            <a href="#signupmodal" className="btn btn-outline-light btn-sm rounded-pill" data-bs-toggle="modal">Sign Up</a>
                        </div>


                    </div>

                </div>
                
                    
                
            </nav>

            
            
    )

};

export default Navbar;