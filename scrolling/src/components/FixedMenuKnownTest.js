import React from 'react';

class FixedMenuKnown extends React.Component {

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
            <div className="header item"> Scrolling Test: {this.props.pageNum}</div>
            <div className="item">Press Start and Scroll Down To Align #{this.props.targetNum} To Grey Area</div>
            <div className="right menu">
              <button ref={this.buttonRef} onClick={this.props.onClickHandler} className="ui button">Click to Start</button>
            </div>
        </div>
  );
}

}

export default FixedMenuKnown;
