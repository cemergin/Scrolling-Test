import React from 'react';

import ScrollTestStyle from './ScrollTestStyle.css'
import LandingPad from './LandingPad'
import ShapeElement from './ShapeElement'
import StarElement from './StarElement'

class ScrollTest extends React.Component {

  constructor(props) {
    super(props);
    this.landingRef = React.createRef();
    this.targetRef = React.createRef();
  }

  render() {
    return (
        <div className="ScrollTest">
          <LandingPad ref={this.landingRef}/>
          <div className="row ScrollTestRow"><ShapeElement index={"0"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"1"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"2"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"3"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"4"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"5"}/></div>
          <div className="row ScrollTestRow" ref={this.targetRef}><StarElement index={"6"}/></div>
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
          <div className="row ScrollTestRow"><ShapeElement index={"19"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"20"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"21"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"22"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"23"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"24"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"25"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"26"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"27"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"28"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"29"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"30"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"31"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"32"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"33"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"34"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"35"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"36"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"37"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"38"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"39"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"40"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"41"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"42"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"43"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"44"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"45"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"46"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"47"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"48"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"49"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"50"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"51"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"52"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"53"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"54"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"55"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"56"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"57"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"58"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"59"}/></div>
          <div className="row ScrollTestRow"><ShapeElement index={"60"}/></div>
        </div>
    );
  }
}

export default ScrollTest;
