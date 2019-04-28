import React from 'react';

import ScrollTestStyle from './ScrollTestStyle.css'
import LandingPad from './LandingPad'
import ShapeElement from './ShapeElement'
import StarElement from './StarElement'

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
          <div className="row ScrollTestRow"><ShapeElement index={"0"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"1"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"2"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"3"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"4"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"5"}/></div>
          <div className="row ScrollTestRow"><StarElement index={"6"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"7"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"8"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"9"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"10"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"11"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"12"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"13"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"14"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"15"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"16"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"17"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"18"}/></div>
        </div>
    );
  }
}

export default ScrollTest;
