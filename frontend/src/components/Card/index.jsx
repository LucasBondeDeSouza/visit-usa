import React from "react";

export default (props) => {

    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>

            <div className="card-description">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}