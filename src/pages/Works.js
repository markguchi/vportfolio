import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import WorkCard from '../layout/WorkCard'
import { addIntersectionObserver } from '../utilities/functions'
import { categoryIcons } from '../utilities/library'

import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export default function Works(props) {
    const works = props.works
    const [filteredWorks, setFilteredWorks] = useState(works)
    const [selectedFilter, setSelectedFilter] = useState("all")
    const location = useLocation();
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);

    const sliceImages = (set) => {
        if(set.length < 4)
        {
            return set
        }
        else
        {
            return set.slice(0, 4)
        }
    }

    useEffect(() => {
        setIndex(0)
    }, [location]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        addIntersectionObserver()
    }, [filteredWorks]);

    const filterWorks = (filterValue) => {
        setSelectedFilter(filterValue)
        if(filterValue === "all"){
            setFilteredWorks(works)
        }
        else
        {
            setFilteredWorks(works.filter((work) => work.category === filterValue))
        }
    }


    return(
    <div id="works" className="w-100 row align-items-stretch justify-content-start">
        <section className="col-12 mb-0 mb-md-4">
            <div className="w-100 row">
                <div className="col-12 col-md-7 col-xl-6 p-0 p-md-2 p-lg-3 p-xl-4 mb-5 mb-md-0 with-animation">
                    <div 
                        className="w-100 d-flex align-items-center justify-content-center animate appear-left" 
                        style={{
                            height: "400px",
                            overflow: "hidden",
                            textAlign: "center",
                            backgroundSize: "auto 100%",
                            backgroundPosition: "center"
                        }}
                    >
                        <Carousel 
                            id="recent-work-carousel"
                            className="w-100 h-100"
                            slide={true}
                            activeIndex={index}
                            onSelect={handleSelect}
                        >
                            {sliceImages(filteredWorks[0].screens).map((image) => {
                                    return(
                                        <Carousel.Item key={image.img}>
                                            <img
                                                src={image.img + "?v=202311061043"}
                                                alt={""}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-xl-4 p-0 p-md-2 p-lg-3 p-xl-4 with-animation">
                    <div className="w-100 h-100 d-flex align-items-start justify-content-center flex-column animate appear-right" style={{ gap: "1em" }}>
                        <div className="w-100 d-flex align-items-center justify-content-between">
                            <Link className="text-decoration-none" to={"/works/" + filteredWorks[0].id}>
                                <h1 className="text-start tera lh-3quarter font-bold"><strong>{filteredWorks[0].title}</strong></h1>
                            </Link>
                            {props.isCategoryVisible &&
                                <h2 
                                    className="clickable text-decoration-none"
                                    onClick={()=>{navigate('/listbycategory', { state: filteredWorks[0].category })}}
                                >
                                    <FontAwesomeIcon icon={categoryIcons[filteredWorks[0].category]}/>
                                </h2>
                            }            
                        </div>   
                        <h3 className="subtitle font-light clickable" onClick={()=>{navigate('/listbytype', { state: filteredWorks[0].subtitle })}}>
                            {filteredWorks[0].subtitle}
                        </h3>
                        <h4>
                            {filteredWorks[0].years.map((year, index)=>{
                                return(
                                    <span 
                                        key={year}
                                        className="clickable text-decoration-none"
                                        onClick={()=>{navigate('/listbyyear',  { state: year } )}}
                                    >
                                        {year}
                                        {index !== filteredWorks[0].years.length - 1 &&
                                            <span>, </span>
                                        }
                                    </span>
                                )
                            })}
                        </h4>
                        <h5 className="w-100 font-light lh-wholeAndHalf" style={{textAlign: "justify"}}>
                            {filteredWorks[0].description}
                        </h5>
                        <div className="w-100 text-start with-animation">
                                        {filteredWorks[0].tags.map((tag) => {
                                            return(
                                                <h6 
                                                    key={tag}
                                                    className="d-inline-block pe-2 mb-4 animate fade-in"
                                                >
                                                    <span className="clickable text-decoration-none bg-blue-25 p-2 px-3 border-round text-nowrap" onClick={()=>{navigate('/listbytag', { state: tag })}}>
                                                        {tag}
                                                    </span>
                                                </h6>  
                                            )
                                        })}
                                </div> 
                    </div>
                </div>
            </div>
        </section>
        <section id="works" className="w-100 row section-padding">
            <div class="row justify-content-center">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 text-center with-animation start">
                    <div class="w-100 d-flex align-items-center justify-content-center">
                        <h5 class={"bttn-transparent clickable opacity" + (selectedFilter === "all"? "-100": "-50")} onClick={()=>{filterWorks("all")}}>All</h5>
                        <h5 class="px-2 opacity-25">/</h5>
                        <h5 class={"bttn-transparent clickable opacity" + (selectedFilter === "development"? "-100": "-50")} onClick={()=>{filterWorks("development")}}>Development</h5>
                        <h5 class="px-2 opacity-25">/</h5>
                        <h5 class={"bttn-transparent clickable opacity" + (selectedFilter === "design"? "-100": "-50")} onClick={()=>{filterWorks("design")}}>Design</h5>
                    </div>
                </div>
            </div>
            <div className="py-2 py-md-3 py-lg-4"></div>
            {filteredWorks.slice(1).map((work) => {
                return(
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3 px-0 px-sm-1 px-md-3 px-xl-4 py-3 py-md-4 py-xl-5 with-animation" key={work.title}>
                        <WorkCard
                            work={work}
                            isCategoryVisible={props.isCategoryVisible}
                        />
                    </div>
                )
            })}
        </section>
    </div>
    )
}