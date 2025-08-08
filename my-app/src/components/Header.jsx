import React, { use, useEffect,useMemo,useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = ()=>{

    const [backtotop] = useState(false);

    useEffect(()=>{
        const scrollHandler = ()=>{

        const getscrolly = window.scrollY;
        const getbktotop = document.querySelector('.back-to-tops');
        // console.log(getscrolly);

        if(getscrolly > 350){
            getbktotop.classList.add("active");
        }else{
            getbktotop.classList.remove("active");
        }

    }

        window.addEventListener("scroll",scrollHandler);

    },[backtotop]);



    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        await loadFull(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    const options = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                },
                modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                outModes: {
                    default: "bounce",
                },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                density: {
                    enable: true,
                },
                value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
            }),
            [],
        );

    return(
        <>
            
            {/* elfsight for viber chat   */}
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-f6ec1821-8f00-4c97-ba98-e9039c02ecec" data-elfsight-app-lazy></div>
        
            {/* Back To Top Button  */}
            <a href="#" className="back-to-tops"> 
               <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
            </a>


            {/*  Start Header Section  */}
            <header>
                
                
                
                {/* start Nav bar  */}
                <Navbar />
                {/* end Nav bar  */}
                

                {/*  start banner  */}
                <div id="banner" className="banners" >

                    <Particles
                        id="tsparticles"
                        particlesLoaded={particlesLoaded}
                        options={options}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 0
                        }}
                    />
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-11 col-lg-8 col-md-10 text-center banner-contents">
                                <h1 className="animates">PTT <span>Software Development Company</span></h1>
                                <h2 className="animates delayones">We help companies to digitalize their bussinesses.</h2>
                                <p className="animates delaytwos">Properly set processes. Transparent cooperation. Predictable delivery.</p>
                                <a href="#loginmodal" className="btn btn-warning btn-lg rounded-pill animates delaythrees" data-bs-toggle="modal">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  end banner   */}

            </header>
            
            {/*  End Header Section   */}
        </>
    )
}

export default Header;