import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, CardText, CardBody,
  CardTitle, Button, Collapse } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {connect} from 'react-redux';

class Portfolio extends React.Component {

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
        <Container id="portfolio">
          <Fade bottom spy={this.props.onPortfolioClick}>
          <Row className="h2">
            <h2>Projets développés</h2>
          </Row>

            <Row className="projects">
              <Col xs="12" md="4" >
                <Card className="projects-details">
                  <CardBody>
                    <FontAwesomeIcon
                      className="icon-portfolio"
                      icon={faReact}
                      size="4x"
                      color="#343A3F"
                    />
                    <CardTitle>sebastiencarret.fr</CardTitle>
                    <CardText>Site vitrine (portfolio & CV en ligne) développé seul en front-end sous React en juin 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="details-button" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{!this.state.collapse ? 'Détails' : 'Fermer'}</Button>
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
                      color="#343A3F"
                    />
                    <CardTitle>EZ spot</CardTitle>
                    <CardText>Application mobile développée en équipe (3pers) sous Expo avec React Native en mai 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="details-button" onClick={this.toggleBis} style={{ marginBottom: '1rem' }}>{!this.state.secondCollapse ? 'Détails' : 'Fermer'}</Button>
                      <Button className="code-button">Bitbucket</Button>
                    </div>
                    <Collapse isOpen={this.state.secondCollapse}>
                      <Card className="card-portfolio">
                        <CardBody>
                          <p>Back-end : Node.js(Express.js)</p>
                          <p>BDD : MongoDB</p>
                          <p>API Google Maps</p>
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
                      color="#343A3F"
                    />
                    <CardTitle>Bike Shop</CardTitle>
                    <CardText>Site e-commerce démo développé seul en formation avec Express.js (Node.js) en avril 2019.</CardText>
                    <div className="button-portfolio">
                      <Button className="details-button" onClick={this.toggleLast} style={{ marginBottom: '1rem' }}>{!this.state.thirdCollapse ? 'Détails' : 'Fermer'}</Button>
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
        </Container>
    );
  }
};

// Redux function
function mapStateToProps(state) {
  return {onPortfolioClick: state.menuClick.onMenuClick}
}

export default connect(
  mapStateToProps,
  null
)(Portfolio);
