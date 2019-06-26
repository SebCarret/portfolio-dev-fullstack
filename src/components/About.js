import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Container, Row, Col, Button} from 'reactstrap';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

export default class About extends React.Component {

  render(){

    return (
      <Container>
        <div id="about">
          <Fade bottom>
            <Row>
              <Col>
                <h2 className="h2">Quelques mots à mon sujet</h2>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md={{size:4, offset:1}}>
                <div id="about-header">
                  <img id="avatar" src="https://www.sebastiencarret.fr/images/uploads/Avatar_Facebook.png" alt="sebastien carret-developpeur fullstack javascript-lyon"/>
                  <h3>Sébastien Carret</h3>
                  <h5>Développeur FullStack JS junior</h5>
                  <div id="phone">
                    <FontAwesomeIcon
                      id="phone-icon"
                      icon={faPhoneSquare}
                      size="2x"
                    />
                    06 17 77 56 12
                  </div>
                </div>

              </Col>
              <Col xs="12" md="5">
                <div id="text-about">
                  <p>Passionné par le web, j'ai décidé début 2019 d'évoluer dans ma carrière en me formant au développement web et mobile JavaScript.</p>
                  <p>Après plusieurs postes dans la communication et le marketing, une expérience entrepreneuriale et 3 années de freelancing au sein de l'écosystème startup, me voilà en quête de ma 1ère expérience en tant que développeur FullStack JS.</p>
                  <p>Et pourquoi pas au sein de votre entreprise ?</p>
                  <Button className="button" size="lg" href="https://www.sebastiencarret.fr/CV_SCarret_DevFullStackJS_2019.pdf" target="_blank">Voir le CV</Button>
                </div>

              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    );
  }
}
