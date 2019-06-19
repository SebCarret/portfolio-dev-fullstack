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
    isOpen: false,
    color: "transparent",
    menuClick: false
  };

  onMenuClick = () => {
    this.setState({
      menuClick: !this.state.menuClick
    });
    this.props.onDropdownMenuClick(this.state.menuClick)
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "dark"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "transparent"
      });
    }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="fixed-top" color={this.state.color} color-on-scroll="100" light expand="md">
          <NavbarBrand id="navbar-brand" href="https://www.sebastiencarret.fr/">Sébastien Carret</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/s%C3%A9bastien-carret/">
                  <FontAwesomeIcon className="icons" icon={faLinkedin} size="2x"/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://twitter.com/Seb_KrAY">
                  <FontAwesomeIcon className="icons" icon={faTwitterSquare} size="2x"/>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/SebCarret">
                  <FontAwesomeIcon className="icons" icon={faGithubSquare} size="2x"/>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle id="dropdown-toggle" nav caret>
                  En savoir plus
                </DropdownToggle>
                <DropdownMenu id="dropdown-menu" right>
                  <a className="link-dropdown" onClick={this.onMenuClick} href="#about">
                    <DropdownItem>
                      <FontAwesomeIcon className="icons-dropdown" icon={faUser} size="1x" />
                      Qui suis-je ?
                    </DropdownItem>
                  </a>
                  <a className="link-dropdown" onClick={this.onMenuClick} href="#skills">
                    <DropdownItem>
                      <FontAwesomeIcon className="icons-dropdown" icon={faThumbsUp} size="1x" />
                      Mes compétences
                    </DropdownItem>
                  </a>
                  <a className="link-dropdown" onClick={this.onMenuClick} href="#portfolio">
                    <DropdownItem>
                      <FontAwesomeIcon className="icons-dropdown" icon={faCode} size="1x" />
                      Projets développés
                    </DropdownItem>
                  </a>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Button className="button" href="mailto:sebastien.carret78@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="1x" /> Me contacter</Button>
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
    onDropdownMenuClick: function(stateDispatch) {
      dispatch({
        type: 'onDropdownLinkClick',
        menuClick: stateDispatch
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
