import React from "react"

import "./style.css"

import Header from "../components/Header.js"

import UserList from "../components/UserList.js"

class List extends React.Component {
    render() {
        return (
            <div className="list_page">
                <Header/>
                <UserList/>
            </div>
        )
    }
}

export default List