import React, { useRef, useEffect } from "react";
import './contact.css'
import Licon from '../../assets/linkedin.png'
import GHub from '../../assets/git.png'
import emailjs from '@emailjs/browser';
import MouseTracker2 from "../MouseTracker2";
import P5Sketch from "../sketch";
import AOS from 'aos'
import 'aos/dist/aos.css'
const Contact= ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_26r2m9a', 'template_ywocpvr', form.current, 'TgJs47GuBZQitXmTo')
          .then((result) => {
              console.log(result.text);
              alert('Email sent!')
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };
      useEffect(() => {
        AOS.init({duration: 1200, delay: 20, easing: "ease-in-sine", offset: 200});
    }, []

    );
    return (
        <div className="flex flex-col items-center ">
        <section id="contactPage" data-aos= "fade-in" className=" flex flex-col z-10 text-center w-1/2 items-center ">
            
            
            
            
            <div className="bg-sage rounded-full justify-center mt-40 z-10 border-4 border-black">
                
            
                <h1 className="contactTitle mt-10 md:text-4xl text-2xl font-bold m-6"> Contact Me</h1>
                <span className="md:text-xl text-lg p-4 font-light "> Feel free to reach out to me through this form!</span>
                
                <form className="contactForm" ref = {form} onSubmit={sendEmail}>
                    <input required type="text" className="nameC" placeholder="Name" name = 'your_name' />
                    <input type="email" className="email" placeholder="Email" name = 'your_email'/>
                    <textarea required type="text" className="msg" rows="5" placeholder="Message" name = 'message' />
                    <button type="submit" className="bg-slate-200  rounded-xl p-4 m-6 w-1/6 text-black hover:bg-orange-100 transition duration-300 ease-in-out">Submit</button>

                    
                    <div className="links">
                        <a href = 'https://www.linkedin.com/in/fawaz-al-khreisha-136128219'>
                        <img href="https://www.linkedin.com/in/fawaz-al-khreisha-136128219" src={Licon} alt = "LinkedIn" className = " link1"/>
                        </a>
                        <a href = 'https://github.com/Fawazak'>
                        <img src={GHub} alt = "GitHub" className = " link"/>
                        </a>
                    </div>
                   
                    
                    
                    
                </form>
                
                
            </div>
            
            
        </section>
        <div className="absolute  mt-60 z-0 	">
            <P5Sketch/>
        </div>
    </div>
        
        
    )
}

export default Contact;