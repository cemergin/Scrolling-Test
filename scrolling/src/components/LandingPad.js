import React from 'react';
import LandingPadStyle from './LandingPadStyle.css'

class LandingPad extends React.Component {

  constructor(props) {
    super(props);
    this.divRef = React.createRef();
  }

  render() {
    return (
      <div ref="divRef" className="fixed column LandingPad" >
      </div>
    );
  }

}

export default LandingPad;
