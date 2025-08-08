import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ()=>{

    // Auto year update
    // const autoyear = document.getElementById("autoyear");
    // autoyear.textContent = new Date().getFullYear();

    return(
        <>
            {/* Start Footer Section  */}
            <footer className="bg-dark text-white py-4 m-0">
                <div className="container">

                    <div className="row">

                        <div className="col-md-4 mb-4 mb-md-0">
                            <h5>About PTT</h5>
                            <p>PTT Software Project Co., Ltd is a leading software development company dedicated to delivering high-quality solutions to businesses worldwide.</p>
                            <div className="socialicons mt-3">
                                <Link href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></Link>
                                <Link href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-twitter" /></Link>
                                <Link href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></Link>
                                <Link href="javascript:void(0);" className="text-white me-2"><FontAwesomeIcon icon="fa-brands fa-instagram" /></Link>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0">
                            <h5 className="mb-3">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link href="javascript:void(0);" className="text-white text-decoration-none">Home</Link></li>
                                <li className="mb-2"><Link href="javascript:void(0);" className="text-white text-decoration-none">Service</Link></li>
                                <li className="mb-2"><Link href="javascript:void(0);" className="text-white text-decoration-none">About Us</Link></li>
                                <li className="mb-2"><Link href="javascript:void(0);" className="text-white text-decoration-none">Pricing</Link></li>
                                <li className="mb-2"><Link href="javascript:void(0);" className="text-white text-decoration-none">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4 mb-4 mb-md-0">
                            <h5 className="mb-3">Contact Info</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-location-dot" /> No.123, Aung San St, Mandalay, Myanmar</li>
                                <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-phone" /> +95 9422042225</li>
                                <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-envelope" /> info@ptt.com</li>
                                <li className="mb-2"><FontAwesomeIcon icon="fa-solid fa-clock" /> Mon-Fri: 9AM - 5AM</li>
                            </ul>
                        </div>

                    </div>

                    <hr className="my-4" />

                    <div className="text-center">
                        <p className="mb-0">&copy; <span id="autoyear">{(new Date().getFullYear())}</span> PTT Software Project Co.,Ltd. All Rights Reserved.</p>
                    </div>

                </div>
            </footer>
            {/* End Footer Section  */}

        </>
    )
}

export default Footer;