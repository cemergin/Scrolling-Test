import React from 'react';
import FixedMenu from './FixedMenu';
import ScrollTest from './ScrollTest';
import _ from 'lodash';


class App extends React.Component {

//Constructor Function For App
  constructor(props) {
    super(props);
    this.state = { num: 0 };
    this.scrollTestReference = React.createRef();
    this.fixedMenuReference = React.createRef();

    // Used to debounce scroll event
    this.decounceAmount = 300;
    this.onChange = this.onChange.bind(this);
    this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), this.decounceAmount);
  }

// Scroll Event Debounce Functions
  onChange(event) {
    this.debouncedOnChange();
  }

  debouncedOnChange(value) {
  this.handleScroll();
}

// Calculates Scroll Time
handleScroll = event => {
    const offset = window.pageYOffset;
    if (this.testStarted){
      const reading = Math.abs(offset - (this.starPosition - this.starHeight));
      console.log("Reading", reading);
      if(reading <= (this.landingPadHeight)){
        console.log("TEST COMPLETED");
        this.testEndTime = Date.now();
        console.log("TIMER");
        const result = this.testEndTime - this.testStartTime - this.decounceAmount;
        console.log(result);
        this.handleButtonClick();
        this.testCompleted = true;
      }
    }
}

// Initializes Variables Function
  initializeTest = () => {
    this.testStarted = false;
    this.testStartTime = Date.now();
    this.testEndTime = 0;
    this.testCompleted = false;
    this.starInPlace = false;

    this.starPosition = this.scrollTestReference.current.targetRef.current.offsetTop;
    this.starHeight = this.scrollTestReference.current.targetRef.current.offsetHeight;
    this.landingPadHeight = this.scrollTestReference.current.landingRef.current.refs.divRef.offsetHeight;
  }

// Click Button to Start Test
  handleButtonClick = () =>
  {
    if(!this.testCompleted){
      this.testStarted = !this.testStarted;
      if (this.testStarted) {
      this.fixedMenuReference.current.buttonRef.current.style.backgroundColor = "green";
      this.testStartTime = Date.now();
      console.log("TEST STARTED");
      }
      else {
      this.fixedMenuReference.current.buttonRef.current.style.backgroundColor = "red";}
    }
  }

  componentDidMount() {
      window.addEventListener('scroll', this.onChange);
      this.initializeTest();
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.onChange);
      this.debouncedOnChange.cancel();
  }

  render() {
      return (
        <div>
          <FixedMenu  onClickHandler={this.handleButtonClick} pageNum={this.state.num} ref={this.fixedMenuReference}/>
          <div className="ScrollTest">
            <ScrollTest ref={this.scrollTestReference}/>
          </div>
        </div>
      );
    }
  }

export default App;
