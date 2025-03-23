import {React, useEffect} from "react";
import './about.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../fonts/blow.ttf'
import sticker from '../../assets/sticker.png'



const About = () => {
    useEffect(() => {
        AOS.init({duration: 1200, delay: 20, easing: "ease-in-sine", offset: 200});
    }, []

    );
    return (
        <section section id= 'about' data-aos= "fade-in" > 
        <div className="flex flex-row justify-center items-center gap-20 ">
            <div className="h-1/2">
        <img src={sticker}  alt="sticker" className=" ml-10 mb-20 md:ml-0" />
        </div>

        <span className="md:text-2xl w-1/2 text-center">I am a recent Software Engineering graduate with experience in both front-end and back-end development, and a keen interest in AI and Machine Learning. I’m devoted to creating software that is impactful, accessible and user-centric. Stay tuned!
        </span>
        </div>
            
        </section>
        
    )

}

export default About