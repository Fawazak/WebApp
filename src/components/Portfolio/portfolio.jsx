import React, { useEffect } from "react";
import './portfolio.css';
import data from '../../data/projects';
// import mov from '../../assets/movie.mp4'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Portfolio = () => {
    function timeout(event) {
        setTimeout(function () {      
            event.target.play();
             }, 100);

       
    }
    useEffect(() => {
        AOS.init({duration: 1200, delay: 20, easing: "ease-in-sine", offset: 200});
    }, []

    );
    return (
        <section className="mt-56 mx-48" >
            <h2 className="titleP" data-aos= "fade-in">Projects</h2>
            <div className="projects" >{
                data.map((project, id) => {
                    
                    return <div className="topContainer" data-aos= "fade-in"> <div key={id} className="pContainer"> 
                    <video className="portfolioImg"
                    poster= {project.imageSrc}
                    onMouseOver={event => timeout(event)}
                    onMouseOut={event => event.target.load()}
                    src={project.vidSrc}
                    muted="true" >
                    </video>
                    
                    <h3 className="pTitle">{project.title}</h3>
                    <p className="pDesc">{project.description}</p>
                    
                    <ul className="pSkills">{
                        project.skills.map((skill, id) => {
                            
                            return(
                                <div className="topSkill">
                                <li key = {id} className="skill">{skill}</li>
                                </div>
                            )
                            
                        })
                    
                }</ul>
                    <div className="links2">
                        <a className="link3" href={project.source}>Source</a>
                    </div>
                        
                </div>
                </div>

                })
                }
                
            </div>
        </section>
    )

}

export default Portfolio;