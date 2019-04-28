import React from 'react';

// <a href="#" className="item">Home</a>
// <div className="ui simple dropdown item">
//   Dropdown <i className="dropdown icon"></i>
//   <div className="menu">
//     <a className="item" href="#">Link Item</a>
//     <a className="item" href="#">Link Item</a>
//     <div className="divider"></div>

class FixedMenu extends React.Component {

  render() {

  return (
      <div>
          <div className="ui fixed inverted menu" >
            <div className="header item">Scrolling Test: #</div>
            <div className="item">Slorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis nibh iaculis sem varius placerat.</div>
            <div className="right menu">
              <button className="ui button">Button</button>
            </div>
        </div>
      </div>
  );
}

}

export default FixedMenu;
