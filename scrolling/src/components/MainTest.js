import React from 'react';
import App from './App';
import AppOne from './AppOne';
import AppTwo from './AppTwo';
import AppThree from './AppThree';
import AppFour from './AppFour';
import AppFive from './AppFive';
import AppSix from './AppSix';
import AppSeven from './AppSeven';
import AppEight from './AppEight';
import AppNine from './AppNine';
import AppTen from './AppTen';
import AppKnown from './AppKnown';
import AppOneKnown from './AppOneKnown';
import AppTwoKnown from './AppTwoKnown';
import AppThreeKnown from './AppThreeKnown';
import AppFourKnown from './AppFourKnown';
import AppFiveKnown from './AppFiveKnown';
import AppSixKnown from './AppSixKnown';
import AppSevenKnown from './AppSevenKnown';
import AppEightKnown from './AppEightKnown';
import AppNineKnown from './AppNineKnown';
import AppTenKnown from './AppTenKnown';
import AppDone from './AppDone';

class MainTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  onComplete = () => {
    const nmr = this.state.num + 1;
    this.setState({num : nmr});
  }

  onReset = () => {;
    this.setState({num : 0})
  }

  generateTests = () => {
    const ind = this.state.num;
    if(ind === 0) return <App onComplete={this.onComplete}/>;
    if(ind === 1) return <AppOne onComplete={this.onComplete}/>;
    if(ind === 2) return <AppTwo onComplete={this.onComplete}/>;
    if(ind === 3) return <AppThree onComplete={this.onComplete}/>;
    if(ind === 4) return <AppFour onComplete={this.onComplete}/>;
    if(ind === 5) return <AppFive onComplete={this.onComplete}/>;
    if(ind === 6) return <AppSix onComplete={this.onComplete}/>;
    if(ind === 7) return <AppSeven onComplete={this.onComplete}/>;
    if(ind === 8) return <AppEight onComplete={this.onComplete}/>;
    if(ind === 9) return <AppNine onComplete={this.onComplete}/>;
    if(ind === 10) return <AppTen onComplete={this.onComplete}/>;
    if(ind === 11) return <AppKnown onComplete={this.onComplete}/>;
    if(ind === 12) return <AppOneKnown onComplete={this.onComplete}/>;
    if(ind === 13) return <AppTwoKnown onComplete={this.onComplete}/>;
    if(ind === 14) return <AppThreeKnown onComplete={this.onComplete}/>;
    if(ind === 15) return <AppFourKnown onComplete={this.onComplete}/>;
    if(ind === 16) return <AppFiveKnown onComplete={this.onComplete}/>;
    if(ind === 17) return <AppSixKnown onComplete={this.onComplete}/>;
    if(ind === 18) return <AppSevenKnown onComplete={this.onComplete}/>;
    if(ind === 19) return <AppEightKnown onComplete={this.onComplete}/>;
    if(ind === 20) return <AppNineKnown onComplete={this.onComplete}/>;
    if(ind === 21) return <AppTenKnown onComplete={this.onComplete}/>;
    if(ind > 21) return <AppDone onReset={this.onReset}/>;
  }

  render() {
      window.scrollTo(0, 0);
      return (
       <this.generateTests/>
      );
    }
}

export default MainTest;
