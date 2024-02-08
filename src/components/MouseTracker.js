import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import './intro.css'

const MouseTracker = () => {
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

    return (
        
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
                        direction: "top",
                        
                        enable: true,
                        outModes: {
                            default: "bounce",
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
    
    );
    
};

export default MouseTracker;