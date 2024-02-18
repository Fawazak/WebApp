import React from "react";
import './skills.css'
import { useState, useRef,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AOS from 'aos'
import 'aos/dist/aos.css'
import data from '../../data/skillset';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ children }) {
    // We add this ref to card element and use in onMouseMove event ...
    // ... to get element's offset and dimensions.
    const ref = useRef();
    
    // Keep track of whether card is hovered so we can increment ...
    // ... zIndex to ensure it shows up above other cards when animation causes overlap.
    const [isHovered, setHovered] = useState(false);
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        // Array containing [rotateX, rotateY, and scale] values.
        // We store under a single key (xys) instead of separate keys ...
        // ... so that we can use animatedProps.xys.interpolate() to ...
        // ... easily generate the css transform value below.
        xys: [0, 0, 1],
        // Setup physics
        config: { mass: 10, tension: 500, friction: 30, precision: 0.1 }
      };
    });
  
    return (
      <animated.div
        ref={ref}
        className="card"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
          // Get mouse x position within card
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || window.scrollX || document.body.scrollLeft));
  
          // Get mouse y position within card
          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || window.scrollY || document.body.scrollTop));
  
          // Set animated values based on mouse position and card dimensions
          const dampen = 50; // Lower the number the less rotation
          const xys = [
            -(y - ref.current.clientHeight / 2) / dampen, // rotateX
            (x - ref.current.clientWidth / 2) / dampen, // rotateY
            1.14 // Scale
          ];
  
          // Update values to animate to
          setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false);
          // Set xys back to original
          setAnimatedProps({ xys: [0, 0, 1] });
        }}
        style={{
          // If hovered we want it to overlap other cards when it scales up
          zIndex: isHovered ? 2 : 1,
          // Interpolate function to handle css changes
          transform: animatedProps.xys.interpolate(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        }}
      >
        {children}
      </animated.div>
    );
    
  }
  
const Skills = () =>{
  useEffect(() => {
    AOS.init({duration: 1200, delay: 20, easing: "ease-in-sine", offset: 200});
}, [])
const sliderSettings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: "linear",
  useTransform: true,
  pauseOnHover: false, // Set autoplay speed in milliseconds (e.g., 3000ms = 3 seconds)
  // Experiment with different values
};
    var date = new Date();
    var hour =  date.getHours();
    var greeting;
    if(hour >= 18){
      greeting = 'Good Evening!'
    }
    else if(hour >= 12){
      greeting = 'Good afternoon!'
    } else if(hour >= 0){
      greeting = 'Good Morning!'
    }
    return (
        <section id= 'skills' data-aos= "fade-in">
            <span className="skillTitle">Skills</span>
            <div className=" mt-20 w-full h-full  rounded-3xl ">
                  <Slider {...sliderSettings}>
                    
                  {
                    data.map((skill, id) => {
                        
                        return <Card>
                          <div className=" flex flex-col items-center bg-beige rounded-3xl md:border-4 border-2 w-20 border-sage p-5  gap-10 md:w-48">
                            
                            <h3 className="md:text-xl text-sm ">{skill.title}</h3>
                            <img src = {skill.imageSrc} alt="logo" className="skillBarImg"/>
                          </div>
                          </Card>

                      })
                      } 
                  </Slider>
                </div>
            
    
                
    
        </section>
    )
}

export default Skills;