import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { categoryIcons } from "../utilities/library"

export default function WorkCard(props) {
    const navigate = useNavigate()
    const sliceImages = (set) => {
        if(set.length < 4)
        {
            return set.slice(1, set.length)
        }
        else
        {
            return set.slice(1, 4)
        }
    }

    return(
            <div 
                className="work-card w-100 h-100 d-flex align-items-start justify-content-start flex-column shadow-full animate fade-in very-fast"
                style={{ rowGap: "0.6em" }}
                onClick={(e)=>{
                    navigate("/view-work/" + props.work.id)
                }}
            >
                <div 
                    className="w-100" 
                    style={{
                        aspectRatio: "4/3",
                        overflow: "hidden",
                        textAlign: "center",
                    }}
                >
                    <div className="w-100 h-100 d-flex align-items-center justify-content-start flex-column" style={{rowGap: "3px"}}>
                        <div className={
                            "w-100 h-75" + 
                            (props.work.screens[0].img.substring(props.work.screens[0].img.length-2, props.work.screens[0].img.length) === "ng"?
                                " bg-black-50 soft-edge-curve p-2"
                            :
                                ""
                            )
                        }>
                            
                            <img src={props.work.screens[0].img} alt={""} className="w-100 h-100 object-fit-cover"/>
                        </div>
                        <div id="image-frame-slideshow"  className="w-100 h-25">
                            <div className="w-100 h-100 row">
                                {sliceImages(props.work.screens).map((screen) => {
                                    return(
                                        <div className="col-4" key={screen.img}>
                                            <div className={
                                                "w-100 h-100 border-adapt-3" + 
                                                (screen.img.substring(screen.img.length-2, screen.img.length) === "ng"?
                                                    " bg-black-25 p-2"
                                                :
                                                    ""
                                                )
                                            }>
                                                <img src={screen.img} alt={""} className="w-100 h-100 object-fit-cover" style={{objectPosition: "center center"}}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-1 m-0 p-0 pt-3 text-start d-flex flex-column">
                    <div className="w-100 px-3 d-flex align-items-center justify-content-between">
                        <h4 className="primary-text"><strong>{props.work.title}</strong></h4>
                        {props.isCategoryVisible &&
                            <h6 style={{opacity: 0.6}}>
                                <a 
                                    className="clickable text-decoration-none"
                                    onClick={(e)=>{
                                        e.stopPropagation()
                                        navigate('/listbycategory', { state: props.work.category })
                                    }}
                                >
                                    <FontAwesomeIcon icon={categoryIcons[props.work.category]}/>
                                </a>
                            </h6>
                        }            
                    </div>
                    <div className="w-100 px-3 row">
                        <div className="col-8 p-0">
                            <h6 className="subtitle">
                                <a 
                                    className="clickable text-decoration-none"
                                    onClick={(e)=>{
                                        e.stopPropagation()
                                        navigate('/listbytype', { state: props.work.subtitle })
                                    }}
                                >
                                    {props.work.subtitle}
                                </a>
                            </h6>
                        </div>
                        <div className="col-4 p-0 text-end">
                            {props.work.years.map((year, index)=>{
                                return(
                                    <span key={year}>
                                        <a 
                                            className="clickable text-decoration-none"
                                            onClick={(e)=>{
                                                e.stopPropagation()
                                                navigate('/listbyyear',  { state: year } )
                                            }}
                                        >
                                            {year}
                                        </a>
                                        {index !== props.work.years.length - 1?
                                            <span>, </span>
                                        :
                                            <span></span>
                                        }
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex-grow-1 w-100 px-3 pt-2 pb-4 font-light bg-blue-5">
                        <div className="truncate">{props.work.description}</div>
                    </div>
                </div>
            </div>
    )
}