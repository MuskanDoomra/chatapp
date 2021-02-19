import React from "react"

import "./style.css"

import UserStatusBar from "../components/UserStatusBar.js"

import MainArea from "../components/MainArea.js"

class ChatArea extends React.Component {
    render() {
        return (
            <div className="chat_area" style={{backgroundImage: `url("./bg.png")`}}>
                <UserStatusBar user={this.props.user}/>
                <MainArea user={this.props.user}/>
            </div>
        )
    }
}

export default ChatArea