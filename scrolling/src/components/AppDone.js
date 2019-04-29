import React from 'react';
import FixedMenuVar from './FixedMenuVar';
import ScrollTestStyle from './ScrollTestStyle.css'

class AppDone extends React.Component {

//Constructor Function For App
  constructor(props) {
    super(props);
    this.state = { num: "x" };
    this.fixedMenuReference = React.createRef();
  }

// Click Button to Reset Test
  handleButtonClick = () =>
  {
    this.props.onReset();
  }

  componentDidMount() {
    this.fixedMenuReference.current.buttonRef.current.style.backgroundColor = "green";
    this.fixedMenuReference.current.buttonRef.current.firstChild.nodeValue = "Click to Repeat";
  }

  render() {
      return (
        <div>
          <FixedMenuVar onClickHandler={this.handleButtonClick} pageNum={this.state.num} ref={this.fixedMenuReference}/>
          <div className="ScrollTest GifMargin">
            <div className="row">
              <div className="ui grid">
                <div className="three column row">
                  <div className="column"></div>
                  <div className="column">
                  <iframe src="https://giphy.com/embed/IcGkqdUmYLFGE" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/IcGkqdUmYLFGE"></a></p>
                  </div>
                  <div className="tcolumn"></div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default AppDone;
