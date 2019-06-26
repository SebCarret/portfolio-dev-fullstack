import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';

// COMPONENTS import
import Header from './Header';
import About from './About';
import Devskills from './DevSkills';
import Portfolio from './Portfolio';

class Content extends Component {

  render() {

    var contentToDisplay;

    if (this.props.type === 'onAboutClick') {
      contentToDisplay = <About/>
    } else if (this.props.type === 'onSkillsClick') {
      contentToDisplay = <Devskills/>
    } else if (this.props.type === 'onPortfolioClick') {
      contentToDisplay = <Portfolio/>
    } else {
      contentToDisplay = <Header/>
    }

    return (

      <div>
        {contentToDisplay}
      </div>

    );
  }
}

// Redux function
function mapStateToProps(state) {
  return {
    type: state.menuClick
  }
};

export default connect(
  mapStateToProps,
  null
)(Content);
