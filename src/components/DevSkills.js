import React from 'react';
import '../App.css';
import { Container, Row, Col, Progress } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faJs, faHtml5, faCss3Alt} from '@fortawesome/free-brands-svg-icons';

export default class DevSkills extends React.Component {

  render() {

    return(

      <Container>
        <div id="skills">
          <Fade bottom>
            <Row>
              <Col>
                <h2 className="h2">Langages & technologies</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <div id="langages">
                  <div>
                    <FontAwesomeIcon
                      icon={faJs}
                      size="4x"
                      color="#64E9EE"
                    />
                    <p>JavaScript</p>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      size="4x"
                      color="#64E9EE"
                    />
                    <p>HTML</p>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      size="4x"
                      color="#64E9EE"
                    />
                    <p>CSS</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress className="progress" multi>
                  <Progress color="dark" bar animated value="55">Front-End</Progress>
                  <Progress striped bar color="info" value="45" />
                </Progress>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-dev">React - React Native - Redux - Bootstrap</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress className="progress" multi>
                  <Progress bar animated color="dark" value="50">Back-End</Progress>
                  <Progress striped bar color="info" value="50" />
                </Progress>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-dev">Node.js - Express.js</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress className="progress" multi>
                  <Progress bar animated color="dark" value="40">BDD & API</Progress>
                  <Progress striped bar color="info" value="60" />
                </Progress>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-dev">MongoDB (NoSQL) - webservices (carte, météo, paiement...)</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Progress className="progress" multi>
                  <Progress bar animated color="dark" value="45">Versioning</Progress>
                  <Progress striped bar color="info" value="55" />
                </Progress>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-dev">Git- Github - Bitbucket</p>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    );
  }
}
