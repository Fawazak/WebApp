import {React, useEffect} from "react";
import './intro.css'
import logo from "../assets/logo.png"
import MouseTracker from "./MouseTracker"
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../fonts/blow.ttf'
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";



const Intro = () => {
   
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    useEffect(() => {
        AOS.init({duration: 1200, delay: 20, easing: "ease-in-sine", offset: 200});
    }, []);
    return (
        
            <div data-aos= "fade-in" className="intro flex flex-row h-screen ml-20 " >

            
                <div className="flex flex-col items-center mt-40 ">
                    <img src={logo} alt="logo" className="  h-80  "/>
                    <div className=" w-[330px] h-full mr-4">
                    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                
                fpsLimit: 120,
                interactivity: {
                    
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "rgb(144, 175, 142)",
                    },links: {
                        color: "#000000",
                        distance: 20,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    
                    move: {
                        direction: "bottom",
                        
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                        attract: {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 600
                        }
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 3500,
                    },
                    opacity: {
                        value: 0.7,
                    },
                    shape: {
                        type: "circle",
                        
                    },
                    size: {
                        value: { min: 0.2, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    
    
                    </div>
                    
                </div>
                
                <div className="flex mb-40 ml-10 w-1/2 flex-col items-center justify-center ">
                    
                    <span className="name">Fawaz Al Khreisha</span> <br></br>
                    <span className="title">&#60;Software Engineer&#62;</span> <br></br>

                </div>
            </div>
       
        
    )

}

export default Intro