import React from "react"

import './App.css'

import List from "./pages/List"

import ChatArea from "./pages/ChatArea"

import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

function App() {
  return (
    <div className="main_page">
      <Router>
        <List/>
        <Switch>

          <Route path="/" exact>
            <ChatArea user="User1" />
          </Route>

          <Route path="/user2" exact>
            <ChatArea user="User2" />
          </Route>

          <Route path="/user3" exact>
            <ChatArea user="User3" />
          </Route>

          <Route path="/user4" exact>
            <ChatArea user="User4" />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
