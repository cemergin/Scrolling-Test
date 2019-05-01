import React from 'react';
import FixedMenuTest from './FixedMenuTest';
import FixedMenuKnownTest from './FixedMenuKnownTest';
import ScrollTest from './ScrollTest';
import ScrollTestKnown from './ScrollTestKnown';
import _ from 'lodash';


class App extends React.Component {

//Constructor Function For App
  constructor(props) {
    super(props);
    this.state = { num: 11 };
    this.scrollTestReference = React.createRef();
    this.fixedMenuReference = React.createRef();

    // Used to debounce scroll event
    this.debounceAmount = 50;
    this.onChange = this.onChange.bind(this);
    this.debouncedOnChange = _.debounce(this.debouncedOnChange.bind(this), this.debounceAmount);

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
    // Get scroll offset
    const offset = window.pageYOffset;
    if (this.testStarted){
      const reading = (this.starPosition + (this.starHeight/2)) - offset;

      // Calculate if the target is in landing pad
      if(reading <= (4*this.landingPadHeight/5) && reading >= (this.starHeight/2)){
        console.log("TEST COMPLETED", this.state.num);
        console.log("TARGET POSITION", this.starPosition);
        this.testEndTime = Date.now();
        const result = this.testEndTime - this.testStartTime - this.debounceAmount;
        console.log("TIMER", result);
        this.handleButtonClick();
        this.testCompleted = true;
        this.props.onComplete();
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
      this.fixedMenuReference.current.buttonRef.current.firstChild.nodeValue = "Running Test";
      this.testStartTime = Date.now();
      console.log("TEST STARTED",this.state.num);
      }
      else {
      this.fixedMenuReference.current.buttonRef.current.style.backgroundColor = "red";
      this.fixedMenuReference.current.buttonRef.current.firstChild.nodeValue = "Done";
      }
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
          <FixedMenuKnownTest onClickHandler={this.handleButtonClick} targetNum={30}  pageNum={this.state.num} ref={this.fixedMenuReference}/>
          <div className="ScrollTest">
            <ScrollTestKnown ref={this.scrollTestReference}/>
          </div>
        </div>
      );
    }
  }

export default App;
