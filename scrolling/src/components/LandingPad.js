import React from 'react';
import LandingPadStyle from './LandingPadStyle.css'

class LandingPad extends React.Component {

  constructor(props) {
    super(props);
    this.landingPadReference = React.createRef();
  }

  render() {
    return (
      <div ref={this.landinPadReference} className="fixed column LandingPad" ></div>
    );
  }

}

export default LandingPad;
