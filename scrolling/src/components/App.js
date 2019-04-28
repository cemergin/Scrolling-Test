import React from 'react';
import FixedMenu from './FixedMenu';
import ScrollTest from './ScrollTest';

class App extends React.Component {

  state = { num: 0 , testStarted: false, starInPlace: false};

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
      // let scrollTop = event.srcElement.body.scrollTop,
      //     itemTranslate = Math.min(0, scrollTop/3 - 60);
      //
      // this.setState({
      //   transform: itemTranslate
      // });
      console.log("Scroll Baby Scroll!");
  }

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
