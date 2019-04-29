import React from 'react';
import FixedMenuVar from './FixedMenuVar';
import _ from 'lodash';

import ScrollTestStyle from './ScrollTestStyle.css'
import LandingPad from './LandingPad'
import ShapeElement from './ShapeElement'
import StarElement from './StarElement'

class AppDone extends React.Component {

//Constructor Function For App
  constructor(props) {
    super(props);
    this.state = { num: "x" };
    this.fixedMenuReference = React.createRef();
  }

// Click Button to Reset Test
  handleButtonClick = () =>
  {
    this.props.onReset();
  }

  componentDidMount() {
    this.fixedMenuReference.current.buttonRef.current.style.backgroundColor = "green";
    this.fixedMenuReference.current.buttonRef.current.firstChild.nodeValue = "Click to Repeat";
  }

  render() {
      return (
        <div>
          <FixedMenuVar onClickHandler={this.handleButtonClick} pageNum={this.state.num} ref={this.fixedMenuReference}/>
          <div className="ScrollTest">

          </div>
        </div>
      );
    }
  }

export default AppDone;
