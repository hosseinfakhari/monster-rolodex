import React from "react";
import "./card.style.css";

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt=""/>
            <h2 key={props.monster.id}>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}