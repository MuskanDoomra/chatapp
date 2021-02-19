import React from "react"

import UserCard from "./UserCard.js"

import usernames from "./UserNames.json"

import "./list_style.css"

import ChatArea from "../pages/ChatArea.js"


function UserList() {
    return (
        <div className="user_list">
            {usernames.map((data,key) => {
                return (
                    <div style={{width: "98%", borderBottom : "1px solid black"}} key={key}>
                        <UserCard 
                            name={data.name}
                            src="./user.png"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default UserList