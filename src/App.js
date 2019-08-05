import React, { Component } from 'react';
import Shape from './Shape.js';
import "./index.css"

class Selector extends Component {
  constructor (){
    super ();
    this.state = {
      selectedShape: 'square',
      count: 0,
    };
};

selectShape = (shapeName) => {
  this.setState({
    selectedShape: shapeName,
    count: this.state.count +1

  })
}


    render() {
      return (
        <div className="container">
          <div className="navbar">
            <div className="selection">Selected:</div>
            <div className="shape-list">
                  < Shape  shape="square" selectShape = {this.selectShape} />
                  < Shape  shape="circle" selectShape = {this.selectShape}  />
                  < Shape  shape="trapezium" selectShape = {this.selectShape}  />
            </div>
            <div >{ this.state.selectedShape } </div>
          </div>

          <div className="footerCounter">
            <div>Number of Clicks:</div>
            <div className="clickNum" >  {this.state.count} </div>

          </div>
        </div>
      );
  }
}


export default Selector;
