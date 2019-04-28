import React from 'react';
import FixedMenu from './FixedMenu';
import ScrollTest from './ScrollTest';

class App extends React.Component {

  state = { num: 0 , testStarted: false, starInPlace: false};



  render() {
      return (
        <div>
          <FixedMenu/>
          <div className="ScrollTest">
            <ScrollTest/>
          </div>
        </div>
      );
    }
  }

export default App;
