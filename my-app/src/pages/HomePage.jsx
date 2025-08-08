import React from "react";

import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ModalBox from "../components/ModalBox";
import BackToTop from "../components/BackToTop";
import Client from '../components/Client'
import Software from '../components/Software'
import Team from '../components/Team'
import Public from '../components/Public'
import Pricing from "../components/Pricing";
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const HomePage = ()=>{
    return(
        <>
            <Header />
            <Navbar />
            <ModalBox />
            <BackToTop />
            <Client />
            <Software />
            <Team />
            <Public />
            <Pricing />
            <Contact />
        </>
    )
};

export default HomePage;