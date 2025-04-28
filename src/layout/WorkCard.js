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

    if (props.work.screens && props.work.screens.length > 0) {
        return(
            <div 
                className="work-card w-100 h-100 d-flex flex-column align-items-center align-items-md-start justify-content-center shadow-full animate fade-in very-fast bg-white"
            
                onClick={(e)=>{
                    navigate("/works/" + props.work.id)
                }}
            >
                <div 
                    className="w-100 aspect-ratio-4-3" 
                    style={{
                        overflow: "hidden",
                        textAlign: "center",
                    }}
                >
                    <div className="w-100 h-100 d-flex align-items-center justify-content-start flex-column" style={{rowGap: "3px", background: "url(" + props.work.screens[0].img + "?v=202311061043) no-repeat center", backgroundSize: "cover"}}>
                        <div className={
                            "w-100 h-100 h-md-75" + 
                            (props.work.screens[0].img.substring(props.work.screens[0].img.length-2, props.work.screens[0].img.length) === "ng"?
                                " bg-black-50 soft-edge-curve p-2"
                            :
                                ""
                            )
                            }
                        >
                            
                            {/* <img src={props.work.screens[0].img + "?v=202311061043"} alt={""} className="w-120 h-120 object-fit-cover"/> */}
                        </div>
                        <div className="image-frame-slideshow w-100 h-25 d-none d-md-inline-block">
                            <div className="w-100 h-100 row px-2 px-lg-3 px-xl-4 px-xxl-5" style={{translate: "0 -5px"}}>
                                {sliceImages(props.work.screens).map((screen) => {
                                    return(
                                        <div className="h-100 col-4 px-1" key={screen.img}>
                                            <div className={
                                                "w-100 h-100 border-adapt-3 border border-2 border-light rounded overflow-hidden shadow-full-backwards" + 
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
                <div className="w-100 p-0 pt-3 text-start d-flex flex-column justify-content-center">
                    <div className="w-100 px-2 px-md-3 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
                        <h4 className="w-100 flex-grow-1 text-start sm">
                            <strong className="truncate">{props.work.title}</strong>
                        </h4>
                        {props.isCategoryVisible &&
                            <h6 
                                className="clickable text-decoration-none sm d-none d-md-inline-block"
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
                    <div className="w-100 row px-2 px-md-3">
                        <div className="col-12 col-md-8 p-0">
                            <h6 
                                className="clickable subtitle text-start text-md-start"
                                onClick={(e)=>{
                                    e.stopPropagation()
                                    navigate('/listbytype', { state: props.work.subtitle })
                                }}
                            >
                                {props.work.subtitle}
                            </h6>
                        </div>
                        <div className="col-12 col-md-4 p-0 text-start text-md-end mb-2 mb-md-0">
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
                    <div className="w-100 px-2 px-md-3 pt-2 pb-4 d-none d-md-inline-block font-light text-start">
                        <div className="truncate">{props.work.description}</div>
                    </div>
                </div>
            </div>
        )
    }
    
}