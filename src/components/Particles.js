import React from 'react';
import '../App.css';
import Particles from 'react-particles-js';
import particlesConfig from '../ressources/particlesjs-config';

export default class ParticlesBackground extends React.Component {

  render(){

    return (
      <div id="particles">

        <Particles params={particlesConfig} />

      </div>
    );
  }
}
