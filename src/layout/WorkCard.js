import { useNavigate } from "react-router-dom"

import { categoryIcons } from "../utilities/library"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
                className="work-card w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center shadow-full animate fade-in very-fast aspect-ratio-4-3 aspect-ratio-md-0 bg-md-white text-md-black"
                style={{ rowGap: "0.6em", background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + props.work.screens[0].img + ") ", backgroundSize: "cover" }}
                onClick={(e)=>{
                    navigate("/works/" + props.work.id)
                }}
            >
                <div 
                    className="w-100 h-100 aspect-ratio-4-3 d-none d-md-inline-block" 
                    style={{
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
                            
                            <img src={props.work.screens[0].img + "?v=202311061043"} alt={""} className="w-120 h-120 object-fit-cover"/>
                        </div>
                        <div id="image-frame-slideshow"  className="w-100 h-25">
                            <div className="w-100 h-100 row">
                                {sliceImages(props.work.screens).map((screen) => {
                                    return(
                                        <div className="h-100 col-4" key={screen.img}>
                                            <div className={
                                                "w-100 h-100 border-adapt-3 border border-light rounded overflow-hidden" + 
                                                (screen.img.substring(screen.img.length-2, screen.img.length) === "ng"?
                                                    " bg-black-25 p-2"
                                                :
                                                    ""
                                                )
                                            }>
                                                <img src={screen.img + "?v=202311061043"} alt={""} className="w-100 h-100 object-fit-cover" style={{objectPosition: "center center"}}/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-0 pt-3 text-start flex-basis-100 flex-basis-md-auto d-flex flex-column justify-content-center text-white">
                    <div className="w-100 px-3 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
                        <h4 className="flex-grow-1 text-center text-md-start">
                            <strong>{props.work.title}</strong>
                        </h4>
                        {props.isCategoryVisible &&
                            <h6 
                                className="clickable text-decoration-none"
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    navigate('/listbycategory', { state: props.work.category })
                                }}
                                style={{opacity: 0.6}}
                            >
                                <FontAwesomeIcon icon={categoryIcons[props.work.category]}/>
                            </h6>
                        }            
                    </div>
                    <div className="w-100 row px-3">
                        <div className="col-12 col-md-8 p-0">
                            <h6 
                                className="clickable subtitle text-center text-md-start"
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    navigate('/listbytype', { state: props.work.subtitle })
                                }}
                            >
                                {props.work.subtitle}
                            </h6>
                        </div>
                        <div className="col-12 col-md-4 p-0 text-center text-md-end mb-2 mb-md-0">
                            {props.work.years.map((year, index)=>{
                                return(
                                    <span 
                                        key={year}
                                        className="clickable text-decoration-none"
                                        onClick={(e)=>{
                                            e.stopPropagation()
                                            navigate('/listbyyear',  { state: year } )
                                        }}
                                    >
                                        {year}
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
                    <div className="w-100 px-3 pt-2 pb-4 font-light text-center text-md-start">
                        <div className="truncate">{props.work.description}</div>
                    </div>
                </div>
            </div>
    )
}