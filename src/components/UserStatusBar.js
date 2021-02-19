import React from 'react'

import "./chat_area.css"

function UserStatusBar(props) {
    return (
        <div className="user_bar">
            <p className="back">{"<"}</p>
            <img className="user_img" src="./user.png" alt="user_icon" />
            <div className="username">
                <p><b>{props.user}</b></p>
                <p className="user_status">online</p>
            </div>
            <div className="icons">
                <img src="./vc.png" alt="vc" className="vc_img" />
                <img src="./call.png" alt="call" className="call_img" />
                <div className="dots">
                    <p className="dot"></p>
                    <p className="dot"></p>
                    <p className="dot"></p>
                </div>
            </div>
        </div>
    )
}

export default UserStatusBar
