import React from "react";
import "../styling/Project.css"

function Project({imageSrc, name}) {
    return(
        <div className="project">
            <div className="image">
                <img src={imageSrc} alt={name} />
            </div>
            <div className="profile">
                {name}
            </div>
        </div>
    )
}

export default Project;