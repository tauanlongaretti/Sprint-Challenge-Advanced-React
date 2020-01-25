import React from "react";

const Players = props => {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>Country: {props.country}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
}

export default Players;