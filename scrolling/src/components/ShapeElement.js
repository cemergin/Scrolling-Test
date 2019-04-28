import React from 'react';
import {Rectangle, Circle, Triangle} from 'react-shapes';

class ShapeElement extends React.Component {

  render(props) {
      return (
        <Rectangle width={100} height={100} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
      );
    }

}

export default ShapeElement;
