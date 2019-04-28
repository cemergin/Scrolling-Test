import React from 'react';

class FixedMenu extends React.Component {

  constructor(props) {
    super(props);
    this.fixedMenuReference = React.createRef();
    this.ButtonReference = React.createRef();
  }

  componentDidMount() {
    this.ButtonReference.current.style.backgroundColor = "orange";
  }

  render(props) {

  return (
          <div className="ui fixed inverted menu" >
            <div className="header item">Scrolling Test: #</div>
            <div className="item">Scroll Down To Place Xs Into The Yellow Area</div>
            <div className="right menu">
              <button ref={this.ButtonReference} onClick={this.props.onClickHandler} className="ui button">Start</button>
            </div>
        </div>
  );
}

}

export default FixedMenu;
