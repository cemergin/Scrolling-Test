import React from 'react';

class FixedMenuVar extends React.Component {

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
            <div className="header item"> Scrolling Test: Completed</div>
            <div className="item">Thank you for participating!</div>
            <div className="right menu">
              <button ref={this.buttonRef} onClick={this.props.onClickHandler} className="ui button">Click to Repeat Test</button>
            </div>
        </div>
  );
}

}

export default FixedMenuVar;
