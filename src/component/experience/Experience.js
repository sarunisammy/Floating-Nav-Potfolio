import React from "react";
import './Experience.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>Html</h4>
    
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
              <h4>Css</h4>
             
    
              <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
              <h4>Javascript</h4>
              
              
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>React</h4>
              
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>Bootstrap</h4>
              
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div><h4>Tailwind</h4>
              
              <small className="text-light"> Experience</small>
              </div>
            </article>
          </div>
        </div>

        {/* end of frentend */}

        <div className="experience__backend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div> <h4>MongoDb</h4> 
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              
              <div>
              <h4>PHP</h4>
              <small className="text-light"> Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
              <h4>mysql</h4>
            
              <small className="text-light"> Experience</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div> <h4>Nodejs</h4>
              <small className="text-light"> Experience</small>
              </div>
              
              
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
              <h4>Python</h4>
             
              
              <small className="text-light"> Experience</small>
              </div>
            </article>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
