import React from 'react';

import ScrollTestStyle from './ScrollTestStyle.css'
import LandingPad from './LandingPad'
import ShapeElement from './ShapeElement'
import StarElement from './StarElement'
import ShapeElementKnown from './ShapeElementKnown'
import StarElementKnown from './StarElementKnown'

class ScrollTestKnown extends React.Component {

  constructor(props) {
    super(props);
    this.landingRef = React.createRef();
    this.targetRef = React.createRef();
  }

  render() {
    return (
        <div className="ScrollTest">
          <LandingPad ref={this.landingRef}/>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"0"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"1"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"2"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"3"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"4"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"5"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"6"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"7"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"8"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"9"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"10"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"11"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"12"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"13"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"14"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"15"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"16"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"17"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"18"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"19"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"20"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"21"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"22"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"23"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"24"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"25"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"26"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"27"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"28"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"29"}/></div>
          <div className="row ScrollTestRow" ref={this.targetRef}><StarElementKnown index={"30"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"31"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"32"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"33"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"34"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"35"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"36"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"37"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"38"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"39"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"40"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"41"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"42"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"43"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"44"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"45"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"46"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"47"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"48"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"49"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"50"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"51"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"52"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"53"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"54"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"55"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"56"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"57"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"58"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"59"}/></div>
          <div className="row ScrollTestRow"><ShapeElementKnown index={"60"}/></div>
        </div>
    );
  }
}

export default ScrollTestKnown;
