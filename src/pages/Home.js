import { useEffect } from "react";

import { addIntersectionObserver } from "../utilities/functions";

import me1 from '../images/me_1.png';
import me2 from '../images/me_2.png';
import me3 from '../images/me_3.png';

const height = (window.screen.height * .75) + "px"
const sectionStyle = {"height": "max-content", "minHeight": height}

function Intro(){
  useEffect(() => {
    addIntersectionObserver()
  }, []);

  return(
    <section id="intro" style={sectionStyle} className="d-flex align-items-center justify-content-center p-5 flex-column with-animation">
    <h1 className="font-regular zetta lh-3quarter animate appear-top fast">Mark Borja</h1>
        <h1 className="font-regular zetta lh-3quarter animate appear-top very-fast">Gutierrez</h1>
        <div className="py-3"></div>
        <h3 className="font-light opacity-75 d-flex flex-row text-blue" style={{gap: "1.25em"}}>
            <span className="animate appear-top fast">Software Developer</span>
            <span className="animate appear-top">Software Engineer</span>
            <span className="animate appear-top slow">UI Designer</span>
        </h3>
    </section>
  )
}

function Home(){
  useEffect(() => {
    addIntersectionObserver()
  }, []);

    return(
        <div>
            <Intro/>
      <section id="profile" style={sectionStyle}>
        <div className="row h-100 with-animation">
          <div className="col-5">
            <div className="h-100 d-flex flex-row align-items-center justify-content-end">
              <div>
                <div className="frame shape-square lg animate fade-blur-float" width="300">
                  <img src={me1} alt="Me"/>
                </div>
              </div>
              <div className="d-flex flex-column align-items-start ps-5">
                <div className="frame shape-square sm animate fade-blur-float slow mb-5" width="300">
                  <img src={me2} alt="Me"/>

                </div>
                <div className="frame shape-square xs animate fade-blur-float very-slow" width="300">
                  <img src={me3} alt="Me"/>

                </div>
              </div>
            </div>
          </div>
          <div className="col-7 text-start ps-5">
            <div className="h-100 d-flex align-items-start justify-content-center ps-5 pt-5 flex-column text-center">
              <div className="py-3"></div>
              <div className="text-start font-light lh-2 animate fade-in">
                <div className="row">
                  <div className="col-6 p-3">
                    While accomplishing my degree, I have taken up multiple jobs to support my studies. I worked as a food service crew in a small canteen, a teacher assistant in the university, a tutor in a renowned study center, and an office staff in a corporation.
                  </div>
                  <div className="col-6 p-3">
                    Also, I dabbled in freelance work which consisted mainly of commissioned artworks such as t-shirt designs, posters, and infographics, and some technical and creative writing, and website design. 
                  </div>
                  <div className="col-12 p-3">
                    Because of my former jobs I learned how to manage people, understand business processes, prioritize tasks, and most importantly, work with different personalities. They have helped me learn new skills and knowledge that prepared me as an IT professional.
                  </div>
                  <h5 className="col-12 p-3 lh-2">
                    In the Information Technology environment, I consider myself a jack-of-all-trades. I am able to take on leadership duties as well as programming duties. I am a capable full-stack developer and a passionate web and mobile UI designer. Moreover, I enjoy project documentation that usually includes itemization of objectives and needs, and diagramming.
                  </h5>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export { Home, Intro }