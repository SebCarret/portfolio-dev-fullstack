import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, CardText, CardBody,
  CardTitle, Button, Collapse } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';

export default class Portfolio extends React.Component {

  state = {
    collapse: false,
    secondCollapse: false,
    thirdCollapse: false
  };

  toggle = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleBis = () => {
    this.setState({
      secondCollapse: !this.state.secondCollapse
    });
  }

  toggleLast = () => {
    this.setState({
      thirdCollapse: !this.state.thirdCollapse
    });
  }

  render(){

    return (
      <Container className="projects">
        <div id="portfolio">
          <Fade bottom>
            <Row>
              <Col>
                <h2 className="h2">Projets développés</h2>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="4" >
                <Card className="projects-details">
                  <CardBody>
                    <FontAwesomeIcon
                      className="icon-portfolio"
                      icon={faReact}
                      size="4x"
                      color="#64E9EE"
                    />
                    <CardTitle className="project-title">sebastiencarret.fr</CardTitle>
                    <CardText>Portfolio en ligne développé en front-end sous React.js en juin 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="button" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{!this.state.collapse ? 'Détails' : 'Fermer'}</Button>
                      <Button className="code-button" href="https://github.com/SebCarret/portfolio-dev-fullstack" target="_blank">Github</Button>
                    </div>
                    <Collapse isOpen={this.state.collapse}>
                      <Card className="card-portfolio">
                        <CardBody>
                          <p>Composants : Reactstrap</p>
                          <p>Logos : Font Awesome</p>
                          <p>Effets : React Reveal</p>
                          <p>Background : particles.js</p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="12" md="4">
                <Card className="projects-details">
                  <CardBody>
                    <FontAwesomeIcon
                      className="icon-portfolio"
                      icon={faReact}
                      size="4x"
                      color="#64E9EE"
                    />
                    <CardTitle className="project-title">EZ Spot</CardTitle>
                    <CardText>Application mobile développée en équipe (3pers) avec React Native en mai 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="button" onClick={this.toggleBis} style={{ marginBottom: '1rem' }}>{!this.state.secondCollapse ? 'Détails' : 'Fermer'}</Button>
                      <Button className="code-button" href="https://bitbucket.org/batch12/" target="_blank">Bitbucket</Button>
                    </div>
                    <Collapse isOpen={this.state.secondCollapse}>
                      <Card className="card-portfolio">
                        <CardBody>
                          <p>Front-end : React Native/Expo</p>
                          <p>Back-end : Node.js(Express.js)</p>
                          <p>Fonctions caméra & géolocalisation</p>
                          <p>BDD : MongoDB</p>
                          <p>API Google (Maps & connect)</p>
                          <p>Gestion des états : Redux</p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </CardBody>
                </Card>
              </Col>

              <Col xs="12" md="4">
                <Card className="projects-details">
                  <CardBody>
                    <FontAwesomeIcon
                      className="icon-portfolio"
                      icon={faNodeJs}
                      size="4x"
                      color="#64E9EE"
                    />
                    <CardTitle className="project-title">Bike Shop</CardTitle>
                    <CardText>Site e-commerce démo développé avec Express.js (Node.js) en avril 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="button" onClick={this.toggleLast} style={{ marginBottom: '1rem' }}>{!this.state.thirdCollapse ? 'Détails' : 'Fermer'}</Button>
                      <Button className="code-button" href="https://banana-crumble-38867.herokuapp.com/" target="_blank">Heroku</Button>
                    </div>
                    <Collapse isOpen={this.state.thirdCollapse}>
                      <Card className="card-portfolio">
                        <CardBody>
                          <p>Back-end : Node.js</p>
                          <p>Front-end : Express (EJS)</p>
                          <p>Paiement : API Stripe</p>
                          <p>Responsive : Bootsrap</p>
                        </CardBody>
                      </Card>
                    </Collapse>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    );
  }
};
