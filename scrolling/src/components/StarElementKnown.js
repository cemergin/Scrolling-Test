import React from 'react';
import {Rectangle, Circle, Triangle} from 'react-shapes';
import {ColorWheel} from './ColorWheel';
import ShapeElementStyle from './ShapeElementStyle.css'
import StarElementStyle from './StarElementStyle.css'

class RectangleElement extends React.Component {
  render(props) {
    return <Rectangle width={100} height={100} fill={{color:this.props.color}} stroke={{color:this.props.color}} strokeWidth={3} />
  }
}
class CircleElement extends React.Component {
  render(props) {
    return <Circle r={50} fill={{color:this.props.color}} stroke={{color:this.props.color}} strokeWidth={3} />
  }
}
class TriangleElement extends React.Component {
  render(props) {
    return <Triangle width={100} height={100} fill={{color:this.props.color}} stroke={{color:this.props.color}} strokeWidth={3} />
  }
}

class StarElementKnown extends React.Component {

  randomShape(shapes, pos, ind) {
      if (pos === ind) {
        return shapes[Math.floor(Math.random() * shapes.length)];
      };
      return;
  }

  render(props) {
    const pos = parseInt(this.props.index) % 3;
    const clr = ColorWheel(pos);
    const shapeArray = [<RectangleElement color={clr}/>, <CircleElement color={clr}/>, <TriangleElement color={clr}/>];
      return (
        <div className="ui relaxed grid">
          <div className="two wide column ShapeElementNum">
          <h2 className="ShapeElementStyle">{this.props.index}</h2>
          </div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape(shapeArray,pos,0)}
             </div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape(shapeArray,pos,1)}
             </div>
             <div className="four wide column ShapeElementStyle">
                {this.randomShape(shapeArray,pos,2)}
             </div>
          <div className="two wide column ShapeElementNum">
          <h2 className="ShapeElementStyle">{this.props.index}</h2>
          </div>
        </div>
      );
  }
}

export default StarElementKnown;
