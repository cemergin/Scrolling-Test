import React from 'react';
import FixedMenu from './FixedMenu';
import ScrollTest from './ScrollTest';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.scrollTestRef = React.createRef();
    this.fixedMenuRef = React.createRef();
    this.initializeTest();
  }

  initializeTest = () => {
    this.testStarted = false;
    this.testStartTime = 0;
    this.testCompleted = false;
    this.starInPlace = false;
    this.starPosition = 0;
    this.landingPadHeight = 0;
  }

  handleButtonClick = () =>
  {
    this.testStarted = !this.testStarted;
    console.log(this.testStarted);
    console.log(this.fixedMenuRef.current.ButtonReference.current);
    if (this.testStarted) {
    this.fixedMenuRef.current.ButtonReference.current.style.backgroundColor = "green";}
    else {
    this.fixedMenuRef.current.ButtonReference.current.style.backgroundColor = "red";}
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      this.starPosition = this.scrollTestRef.current.starElementRef.current.offsetTop;
      console.log(this.starPosition);
      this.landingPadHeight = this.scrollTestRef.current.landingPadRef.current.offsetHeight;
      console.log(this.landingPadHeight);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    console.log("Scroll Baby Scroll!");
    console.log("Scroll Amount");
    console.log(window.pageYOffset);
  }

  render() {
      return (
        <div>
          <FixedMenu  onClickHandler={this.handleButtonClick} ref={this.fixedMenuRef}/>
          <div className="ScrollTest">
            <ScrollTest ref={this.scrollTestRef}/>
          </div>
        </div>
      );
    }
  }

export default App;
