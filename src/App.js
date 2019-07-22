import React, { Component } from 'react';
import Shape from './Shape.js';

class Selector extends Component {
  constructor (){
    super ();
    this.state = {
      selectedShape: 'square',
    };
};S

selectShape = (shapeName) => {
  this.setState({
    selectedShape: shapeName
  })
}

    render() {
      return (
        <div className="container">
          <div className="navbar">
            <div>Selected:</div>
            <div className="shape-list">
                  < Shape  shape="square" selectShape = {this.selectShape} />
                  < Shape  shape="circle" selectShape = {this.selectShape}  />
                  < Shape  shape="triangle" selectShape = {this.selectShape}  />
            </div>
            <div >{ this.state.selectedShape } </div>
          </div>
        </div>
      );
  }
}


export default Selector;
