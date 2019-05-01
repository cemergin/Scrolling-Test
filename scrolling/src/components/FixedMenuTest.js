import React from 'react';

class FixedMenuTest extends React.Component {

  constructor(props) {
    super(props);
    this.menuRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidMount() {
    this.buttonRef.current.style.backgroundColor = "orange";
  }

  render(props) {

  return (
          <div ref={this.menuRef} className="ui fixed inverted menu">
            <div className="header item"> Scrolling Test: Scrolling Test: {this.props.pageNum}</div>
            <div className="item">This is the test run for the scrolling test! Scroll up do land the X X X in the the grey zone</div>
            <div className="right menu">
              <button ref={this.buttonRef} onClick={this.props.onClickHandler} className="ui button">Click to Start</button>
            </div>
        </div>
  );
}

}

export default FixedMenuTest;
