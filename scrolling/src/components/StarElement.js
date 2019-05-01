import React from 'react';
import {Polyline} from 'react-shapes';
import ShapeElementStyle from './ShapeElementStyle.css'
import StarElementStyle from './StarElementStyle.css'

class StarElement extends React.Component {

  randomShape() {
        return (
            <Polyline points='0 0, 25 50, 0 100, 40 100, 50 75, 60 100,100 100, 75 50, 100 0, 60 0, 50 25, 40 0, 0 0' fill={{color:'#000000'}} stroke={{color:'#000000'}} strokeWidth={1} />
        )
      }

  render(props) {
      return (
        <div className="ui relaxed grid">
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
