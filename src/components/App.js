import React from "react";
import Cockpit from "./Cockpit";
import ListContainer from "./ListContainer";


export default class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Cockpit />
        <ListContainer />
      </div>
    );
  }
}
