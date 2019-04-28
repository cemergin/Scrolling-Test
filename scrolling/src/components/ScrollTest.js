import React from 'react';

import ScrollTestStyle from './ScrollTestStyle.css'
import LandingPad from './LandingPad'
import ShapeElement from './ShapeElement'

class ScrollTest extends React.Component {

  handleScroll = e => {
    //let element = e.target
    //if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      console.log('Scroll Happened');
    //}
  }

  render() {
    return (
        <div className="ScrollTest">
          <LandingPad/>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
          <div className="row ScrollTestRow"><ShapeElement/></div>
        </div>
    );
  }
}

export default ScrollTest;
