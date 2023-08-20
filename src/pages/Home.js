import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { addIntersectionObserver } from "../utilities/functions";
import { techIcons } from "../utilities/library";

import me1 from '../images/me_1.png';
import me2 from '../images/me_2.png';
import me3 from '../images/me_3.png';

function Intro(){
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    addIntersectionObserver()
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return(
    <section id="intro" style={{height: dimensions.height + "px"}} className="d-flex align-items-center justify-content-center ">
      <div className="w-100 p-0 m-0 d-flex align-items-center justify-content-center p-0 p-md-5 flex-column with-animation">
        <h5 className="font-light w-100 w-xl-25 w-xxl-25 opacity-50 d-flex flex-column flex-lg-row justify-content-between ">
          <span className="w-100 px-3 mb-3 text-center animate fade-in very-slow delay-1000">09615383895  /  rmbg2798@gmail.com</span>
        </h5>
        <div className="py-2"></div>
        <h1 className="font-regular yota lh-3quarter animate appear-top fast">Mark Borja</h1>
        <h1 className="font-regular yota lh-3quarter animate appear-top very-fast">Gutierrez</h1>
        <div className="py-4"></div>
        <h3 className="font-light w-100 w-xl-75 w-xxl-50 opacity-75 d-flex flex-column flex-lg-row justify-content-between text-blue">
          <span className="flex-basis-33 px-3 mb-3 text-center animate appear-top fast">Software Developer</span>
          <span className="flex-basis-33 px-3 mb-3 text-center animate appear-top">Software Engineer</span>
          <span className="flex-basis-33 px-3 mb-3 text-center animate appear-top slow">UI Designer</span>
        </h3>
      </div>
    </section>
  )
}

function Home(props){
  const navigate = useNavigate()
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    addIntersectionObserver()
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return(
    <div>
      <Intro/>
      <section id="profile">
        <div className="row h-100">
          <div className="col-12 col-xl-6 col-xxl-5">
            <div className="h-100 w-100 d-flex flex-row align-items-start align-items-xl-center justify-content-center justify-content-xl-end px-0 with-animation">
              <div className="flex-basis-65 flex-basis-xxl-60 d-flex align-items-start justify-content-center justify-content-xl-end">
                <div className=" flex-shrink-1 frame shape-square lg animate fade-blur-float w-75">
                  <img src={me1} alt="Me"/>
                </div>
              </div>
              <div className="px-0 px-md-3 px-xxl-4"></div>
              <div className="flex-basis-30 flex-basis-xxl-40 d-flex flex-column align-items-start">
                <div className="frame shape-square sm animate fade-blur-float slow mb-4 mb-lg-4 w-75">
                  <img src={me2} alt="Me"/>
                </div>
                <div className="frame shape-square xs animate fade-blur-float very-slow w-50">
                  <img src={me3} alt="Me"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6 col-xxl-7 text-start px-0 ps-md-5">
            <div className="h-100 d-flex flex-column align-items-start justify-content-center px-0 with-animation">
              <div className="py-3"></div>
              <div className="text-start font-light lh-2 animate fade-in">
                <div className="row">
                  <div className="col-12 col-xxl-6 p-3">
                    While accomplishing my degree, I have taken up multiple jobs to support my studies. I worked as a food service crew in a small canteen, a teacher assistant in the university, a tutor in a renowned study center, and an office staff in a corporation.
                  </div>
                  <div className="col-12 col-xxl-6 p-3">
                    Also, I dabbled in freelance work which consisted mainly of commissioned artworks such as t-shirt designs, posters, and infographics, some technical and creative writing, and website design. 
                  </div>
                  <div className="col-12 p-3">
                    Because of my former jobs I learned how to manage people, understand business processes, prioritize tasks, and most importantly, work with different personalities. They have helped me learn new skills and knowledge that prepared me as an IT professional.
                  </div>
                  <div className="col-12 p-3 lh-2">
                    In the Information Technology environment, I consider myself a jack-of-all-trades. I am able to take on leadership duties as well as programming duties. I am a capable full-stack developer and a passionate web and mobile UI designer. Moreover, I enjoy project documentation that usually includes itemization of objectives and needs, and diagramming.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tech-background">
        <h1 className="giga text-center with-animation with-animation">
          <span className="animate fade-in">Tools I work with</span>
        </h1>
        <div className="py-3 py-md-5"></div>
        <div className="row">
          {props.developmentBackground.filter(tech => tech.years >= 1).map((tech) => {
            return(
              <div className="col-6 col-md-4 col-xxl-2 px-2 py-3 px-md-3 py-md-4 px-xl-4 py-xl-5 with-animation">
                <div className="w-100 h-100 bg-white border-round d-flex flex-column align-items-center px-3 py-2 mb-5 animate fade-blur-float">
                  <div className="flex-basis-60 d-flex align-items-center justify-content-center">
                    <img src={techIcons[tech.id]} alt={techIcons[tech.id]} className="tech-icon w-50 w-md-75 h-auto object-fit-contain opacity-75"/>
                  </div>
                  <div className="flex-basis-40">
                    {tech.name?
                      <h4>{tech.name}</h4>
                    :
                      
                      <h4>{tech.id.charAt(0).toUpperCase() + tech.id.slice(1, tech.id.length)}</h4>
                    }
                    <div className="py-2"></div>
                    <small className="font-light mx-3">
                      {tech.years > 1?
                      <>{tech.years} YEARS</>
                      :
                      <>{tech.years} YEAR</>
                      }
                    </small>
                  </div>
                </div>
              </div>
            )
          })}
          {props.designBackground.filter(tech => tech.years >= 1).map((tech) => {
            return(
              <div className="col-6 col-md-4 col-xxl-2 px-2 py-3 px-md-3 py-md-4 px-xl-4 py-xl-5 with-animation">
                <div className="w-100 h-100 bg-dark border-round d-flex flex-column align-items-center px-3 py-2 mb-5 text-white animate fade-blur-float">
                  <div className="flex-basis-60 d-flex align-items-center justify-content-center">
                    <img src={techIcons[tech.id]} alt={techIcons[tech.id]} className="tech-icon light w-50 w-md-75 h-auto object-fit-contain opacity-75"/>
                  </div>
                  <div className="flex-basis-40">
                    {tech.name?
                      <h4>{tech.name}</h4>
                    :
                      
                      <h4>{tech.id.charAt(0).toUpperCase() + tech.id.slice(1, tech.id.length)}</h4>
                    }
                    <div className="py-2"/>
                    <small className="font-light mx-3">{tech.years} YEARS</small>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="col-12 col-md-8 col-xxl-4 px-2 py-3 px-md-3 py-md-4 px-xl-4 py-xl-5 with-animation">
            <div className="w-100 h-100 bg-blue-10 border-round d-flex flex-column align-items-center justify-content-between p-4 mb-5 text-start animate fade-blur-float">
              <div className="flex-basis-40 w-100 d-flex align-items-center">
                <h4 className="font-bold m-0 lh-0">Others</h4>
                <h6 className="ps-2 font-light m-0 lh-0 opacity-75">(Less than a year)</h6>
              </div>
              <div className="flex-basis-60 d-flex">
                {props.developmentBackground.filter(tech => tech.years < 1.0).map((tech) => {
                  return(
                    <div className="h-100 d-flex flex-column align-items-start justify-content-between p-2 text-center">
                      <div className="h-100 d-flex align-items-center justify-content-center">
                        <img src={techIcons[tech.id]} alt={techIcons[tech.id]} className="tech-icon w-50 h-auto object-fit-contain opacity-75"/>
                      </div>
                      <div className="w-100">
                        {tech.name?
                          <h6 className="w-100">{tech.name}</h6>
                        :
                            
                          <h6 className="w-100">{tech.id.charAt(0).toUpperCase() + tech.id.slice(1, tech.id.length)}</h6>
                        }
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recent-works">
        <h1 className="giga text-center with-animation">
          <span className="animate fade-in">My most recent works</span>
        </h1>
        <div className="py-3 py-md-5"></div>
        <div className="row">
          <div className="col-12 mb-4 col-xl-6">
            <div className="h-100 d-flex flex-column align-items-start justify-content-between">
              <div className="d-flex flex-row with-animation">
                <div className="flex-basis-33 d-flex flex-row">
                  {props.recentWorks[0].screens.slice(0, 5).map((work, index) => {
                    return(
                      <img 
                        src={work.img}
                        alt={work.img}
                        className={"stack-item flex-basis-100 w-100 h-auto object-fit-contain shadow-full border-round animate bump-scoot-right delay-" + index}
                        style={{
                          translate: index * - 50 + "% 0",
                          scale: 1 - (index * 0.1) + "",
                          zIndex: props.recentWorks[0].screens.length - index
                        }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="p-4"></div>
              <div className="with-animation">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-start mb-2 mb-md-0">
                  <h1 
                    className="mega font-bold clickable me-0 me-md-4 animate fade-in very-slow"
                    onClick={(e)=>{
                      navigate("/view-work/" + props.recentWorks[0].id)
                    }}
                  >
                    {props.recentWorks[0].title}
                  </h1>
                  <div className="d-flex">
                    {props.recentWorks[0].languages.map((language) => {
                      return (
                        <div className="mx-1 bg-blue shape-circle d-flex align-items-center justify-content-center lh-0 animate fade-in very-slow" style={{letterSpacing: "0.05em"}}>
                          <img
                            key={language}
                            src={techIcons[language]}
                            alt={language}
                            title={language.charAt(0).toUpperCase() + language.slice(1)}
                            className="tech-icon light mx-2"
                            style={{height: "1em"}}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="opacity-75 text-center text-md-start animate fade-in very-slow">
                  {props.recentWorks[0].technologies.map((technology) => {
                    return (
                      <img
                        key={technology}
                        src={techIcons[technology]}
                        alt={technology}
                        title={technology.charAt(0).toUpperCase() + technology.slice(1)}
                        className="tech-icon opacity-75 mx-2"
                        style={{ height: "1.5em" }}
                      />
                    )
                  })}
                </div>
                <div className="p-3"></div>
                <h5 className="text-center text-md-start font-light lh-2 animate fade-in very-slow">
                  {props.recentWorks[0].description}
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="h-100 d-flex flex-column align-items-start justify-content-between">
              <div className="d-flex with-animation" style={{height: "max-content"}}>
                <div className="flex-basis-75 d-flex">
                  {props.recentWorks[1].screens.slice(0, 5).map((work, index) => {
                    return(
                      <img 
                        src={work.img} 
                        alt={work.img}
                        className={"stack-item flex-basis-100 w-100 h-auto object-fit-contain shadow-full border-round animate bump-scoot-left delay-" + index}
                        style={{
                          translate: index * - 75 + "% " + index * 50 + "%",
                          scale: 1 - (index * 0.1) + "",
                          zIndex: props.recentWorks[1].screens.length - index
                        }}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="d-inline-block d-md-none" style={{height: dimensions.width * 0.25 + "px"}}></div>
              <div className="p-4"></div>
              <div className="with-animation">
                <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-end mb-2 mb-md-0">
                    <div className="d-flex">
                    {props.recentWorks[1].languages.map((language) => {
                      return (
                        <div className="mx-1 bg-blue shape-circle d-flex align-items-center justify-content-center lh-0 animate fade-in very-slow" style={{letterSpacing: "0.05em"}}>
                          <img
                            key={language}
                            src={techIcons[language]}
                            alt={language}
                            title={language.charAt(0).toUpperCase() + language.slice(1)}
                            className="tech-icon light mx-2"
                            style={{height: "1em"}}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <h1 
                    className="mega font-bold clickable ms-0 ms-md-4 animate fade-in very-slow"
                    onClick={(e)=>{
                      navigate("/view-work/" + props.recentWorks[1].id)
                    }}
                  >
                    {props.recentWorks[1].title}
                  </h1>
                </div>
                <div className="opacity-75 text-center text-md-end">
                  {props.recentWorks[1].technologies.map((technology) => {
                    return (
                      <img
                        key={technology}
                        src={techIcons[technology]}
                        alt={technology}
                        title={technology.charAt(0).toUpperCase() + technology.slice(1)}
                        className="tech-icon opacity-75 mx-2 animate fade-in very-slow"
                        style={{ height: "1.5em" }}
                      />
                    )
                  })}
                </div>
                <div className="p-3"></div>
                <h5 className="font-light lh-2 text-center text-md-end animate fade-in very-slow">
                  {props.recentWorks[1].description}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export { Home, Intro }