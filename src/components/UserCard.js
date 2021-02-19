import React from "react"

import "./list_style.css"

import {Link} from "react-router-dom"

export default function UserCard(props) {
    const {
        name, 
        src
    } = props;

    var path = "/" + name.toLowerCase();

    path = (name==="User1") ? "/" : path;

    return (
        <Link to={path} className="link">
            <div className="user_card" tabIndex="1">
                <img src={src} className="user_img"/>
                <p className="user_name"><b>{name}</b></p>
            </div>
        </Link>
    )
}
