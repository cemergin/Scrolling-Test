import React from 'react';
import {Polyline,CornerBox} from 'react-shapes';
import ShapeElementStyle from './ShapeElementStyle.css'
import StarElementStyle from './StarElementStyle.css'

class StarElement extends React.Component {

constructor(props) {
  super(props);
  this.starElementReference = React.createRef();
}

  randomShape() {
        return (
            <Polyline points='0 0, 25 50, 0 100, 40 100, 50 75, 60 100,100 100, 75 50, 100 0, 60 0, 50 25, 40 0, 0 0' fill={{color:'#E65243'}} stroke={{color:'#E65243'}} strokeWidth={1} />
        )
      }

  render(props) {
      const pos = parseInt(this.props.index) % 3;
      return (
        <div ref={this.starElementReference} className="ui relaxed grid">
          <div className="two wide column"></div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape()}
             </div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape()}
             </div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape()}
             </div>
          <div className="two wide column"></div>
        </div>
      );
  }
}

export default StarElement;
