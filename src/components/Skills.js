import React from 'react';
import '../App.css';
import { Progress } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJs, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {connect} from 'react-redux';

class Skills extends React.Component {

  render(){

    return (
        <div id="skills">
          <Fade bottom spy={this.props.onSkillsClick}>
            <h2 className="h2">Langages & technologies</h2>
            <div id="langages">
              <div>
                <FontAwesomeIcon
                  icon={faJs}
                  size="4x"
                  color="#F0DB4E"
                />
                <p>JavaScript</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="4x"
                  color="#E44D25"
                />
                <p>HTML</p>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  size="4x"
                  color="#264DE4"
                />
                <p>CSS</p>
              </div>
            </div>
              <h3 className="h3">Front-End</h3>
              <Progress className="progress" multi>
                <Progress color="dark" bar animated value="50">React.js - React Native - Redux - Bootstrap</Progress>
                <Progress striped bar color="info" value="50" />
              </Progress>
              <h3 className="h3">Back-End</h3>
              <Progress className="progress" multi>
                <Progress bar animated color="dark" value="60">Node.js - Express.js</Progress>
                <Progress striped bar color="info" value="40" />
              </Progress>
              <h3 className="h3">Bases de données & webservices</h3>
              <Progress className="progress" multi>
                <Progress bar animated color="dark" value="50">MongoDB - API</Progress>
                <Progress striped bar color="info" value="50" />
              </Progress>
              <h3 className="h3">Versioning</h3>
              <Progress className="progress" multi>
                <Progress bar animated color="dark" value="50">Git - Github - Bitbucket</Progress>
                <Progress striped bar color="info" value="50" />
              </Progress>
        </Fade>
      </div>
    );
  }
}

// Redux function
function mapStateToProps(state) {
  return {onSkillsClick: state.menuClick.onMenuClick}
}

export default connect(
  mapStateToProps,
  null
)(Skills);
