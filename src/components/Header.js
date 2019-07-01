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
      <Container className="content">
        <div className="header">
          <FadeReveal top>
            <Row>
              <Col>
                <h1>Bienvenue sur mon portfolio</h1>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md={{size:6, offset:3}}>
                <p id="text-header">Parcours professionnel, langages & technologies maîtrisés, projets développés, réseaux sociaux... Grâce au menu ci-dessus, vous en apprendrez plus sur mes compétences en développement. Bonne visite !</p>
              </Col>
            </Row>
          </FadeReveal>
        </div>
      </Container>
    );
  }
}

export default Header;
