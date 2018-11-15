import React from 'react';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Play from './play';
import DeadComponent from './DeadComponent';

import tabaangry from '../assets/images/tabaangry.gif';
import tabadead from '../assets/images/tabadead.gif';
import tabaeat from '../assets/images/tabaeat.png';
import tabadeath from '../assets/images/tabadeath.gif';
import tabalove from '../assets/images/tabalove.png';
import tabamusic from '../assets/images/tabamusic.png';
import tabanormal from '../assets/images/tabanormal.gif';
import tabapoo from '../assets/images/tabapoo.png';
import tabasick from '../assets/images/tabasick.png';

const defaultState = {
  hunger: 10,
  sleep: 10,
  cleanliness: 10,
  boredom: 10,
  inBed: false,
  sick: false,
  images: {
    tabaangry,
    tabadead,
    tabaeat,
    tabadeath,
    tabalove,
    tabamusic,
    tabanormal,
    tabapoo,
    tabasick
  },
  displayImage: tabanormal,
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = defaultState
    this.controlHungerLevel = this.controlHungerLevel.bind(this);
    this.statusFill = this.statusFill.bind(this);
    this.stateToDisplayImage = this.stateToDisplayImage.bind(this);
  }


  componentDidMount(){
    this.controlHungerLevelTimer = setInterval(() =>
      this.controlHungerLevel(),
      10000
    );
      this.controlSleepLevelTimer = setInterval(() =>
      this.controlSleepLevel(),
      10000
    );
      this.controlCleanlinessLevelTimer = setInterval(() =>
      this.controlCleanlinessLevel(),
      10000
    );
      this.controlBoredomLevelTimer = setInterval(() =>
      this.controlBoredomLevel(),
      10000
    );
  }
  stateToDisplayImage() {

    let newState = JSON.parse(JSON.stringify(this.state));
    if (this.state.hunger < 10 && newState.displayImage != tabaangry) {
      newState.displayImage = tabaangry;
      this.setState(newState);
    }
    if (this.state.hunger == 10 && newState.displayImage != tabanormal) {
      newState.displayImage = tabanormal;
      this.setState(newState);
    }
  }

  componentDidUpdate() {
  this.stateToDisplayImage();
  }

  controlHungerLevel() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.hunger --;
    this.setState(newState);
  }
  controlSleepLevel() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.sleep --;
    this.setState(newState);
  }
  controlCleanlinessLevel() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.cleanliness --;
    this.setState(newState);
  }
  controlBoredomLevel() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.boredom --;
    this.setState(newState);
  }


  statusFill(input){
    let newState = JSON.parse(JSON.stringify(this.state));
    if (typeof newState[input] === "number"){
    newState[input] = 10;
  } else {
    newState[input] = true;
  }
    this.setState(newState);
  }


  // decrease levels at intervals

  //write a function that sets state at -- at intervals



  // update image on levels

  // send levels to tama TamaContainer
  // write function in tamacontainer that changes images


  // Update states on button clicks:

  // ui display to see what we're doing
  // write a function that does out most basic thing
  //test the function
  // give access of function to child



  render(){
    return (
      <div>

        <div>
          Hunger Level = {this.state.hunger} <hr/>
          Sleep Level = {this.state.sleep} <hr/>
          Cleanliness Level = {this.state.cleanliness} <hr/>
          Boredom Level = {this.state.boredom} <hr/>
          In Bed? = {this.state.inBed.toString()} <hr/>
          Sick? = {this.state.sick.toString()} <hr/>
        </div>
        <Switch>
          <Route exact path='/' render={()=><Play displayImage = {this.state.displayImage} onStatusFill={this.statusFill} />} />
          <Route exact path='/dead' component={DeadComponent} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
