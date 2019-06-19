import React from 'react';
import FadeReveal from 'react-reveal/Fade';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';

class Header extends React.Component {

  state = {
    fadeIn: false,
    fadeButton: true
  };

  toggle = () => {
    this.setState({
      fadeIn: !this.state.fadeIn,
      fadeButton: !this.state.fadeButton
    })
  }

  render(){

    return (

          <Container className="header">
            <FadeReveal top>
            <Row>
              <Col>
                <h1>Bienvenue sur mon portfolio</h1>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md={{size: 6, offset: 3}}>
                <p id="text-header">Parcours, langages & technologies maîtrisés, projets développés... En parcourant cette page, vous saurez tout de mes compétences de développement !</p>
              </Col>

            </Row>

          </FadeReveal>
          </Container>
    );
  }
}

export default Header;
