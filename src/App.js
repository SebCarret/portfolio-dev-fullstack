import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components import
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Particles from './components/Particles';

// Redux import
import menuClick from './reducer/menu.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({menuClick}));

class App extends React.Component {

  render(){

    return (
      <Provider store={store}>
        <div className="App">
          <Particles/>
          <Navbar/>
          <Header/>
          <About/>
          <Skills/>
          <Portfolio/>
        </div>
      </Provider>
    );
  }
}

export default App;
