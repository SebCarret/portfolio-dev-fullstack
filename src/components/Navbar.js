import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faUser, faThumbsUp, faCode, faEnvelope} from '@fortawesome/free-solid-svg-icons';
  import { faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
  import '../App.css';
  import {connect} from 'react-redux';


  class Navigation extends React.Component {

    state = {
      isOpen: false
    };

    onAboutLinkClick = () => {
      this.props.onAboutClick()
    };

    onSkillsLinkClick = () => {
      this.props.onSkillsClick()
    };

    onPortfolioLinkClick = () => {
      this.props.onPortfolioClick()
    };

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
      render() {
        return (
          <div>
            <Navbar className="fixed-top" color="dark" light expand="md">
              <NavbarBrand id="navbar-brand" href="https://www.sebastiencarret.fr/">Sébastien Carret</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <div id="icons-bloc">
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/s%C3%A9bastien-carret/" target="_blank">
                      <FontAwesomeIcon className="icons" icon={faLinkedin} size="2x"/>
                    </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="https://twitter.com/Seb_KrAY" target="_blank">
                      <FontAwesomeIcon className="icons" icon={faTwitterSquare} size="2x"/>
                    </NavLink>
                    </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/SebCarret" target="_blank">
                        <FontAwesomeIcon className="icons" icon={faGithubSquare} size="2x"/>
                      </NavLink>
                    </NavItem>
                  </div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="dropdown-toggle" nav caret>
                En savoir plus
              </DropdownToggle>
              <DropdownMenu id="dropdown-menu" right>
                <a className="link-dropdown" onClick={this.onAboutLinkClick} href="#about">
                  <DropdownItem>
                    <FontAwesomeIcon className="icons-dropdown" icon={faUser} size="1x" />
                    Qui suis-je ?
                  </DropdownItem>
                  </a>
                  <a className="link-dropdown" onClick={this.onSkillsLinkClick} href="#skills">
                    <DropdownItem>
                      <FontAwesomeIcon className="icons-dropdown" icon={faThumbsUp} size="1x" />
                      Mes compétences
                    </DropdownItem>
                  </a>
                  <a className="link-dropdown" onClick={this.onPortfolioLinkClick} href="#portfolio">
                    <DropdownItem>
                      <FontAwesomeIcon className="icons-dropdown" icon={faCode} size="1x" />
                      Projets développés
                    </DropdownItem>
                  </a>
                </DropdownMenu>
                </UncontrolledDropdown>
                  <Button className="button" href="mailto:contact@sebastiencarret.fr"><FontAwesomeIcon icon={faEnvelope} size="1x" /> Me contacter</Button>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
  }

// Redux function
function mapDispatchToProps(dispatch) {
  return {
    onAboutClick: function() {
      dispatch({
        type: 'onAboutClick'
      })
    },
    onSkillsClick: function() {
      dispatch({
        type: 'onSkillsClick'
      })
    },
    onPortfolioClick: function() {
      dispatch({
        type: 'onPortfolioClick'
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
