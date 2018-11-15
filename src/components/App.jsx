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
import poo from '../assets/images/poo.png';
import tabasick from '../assets/images/tabasick.png';

const defaultState = {
  hunger: 10,
  sleep: 10,
  cleanliness: 10,
  boredom: 10,
  inBed: false,
  sick: false,
  poo: null,
  images: {
    tabaangry,
    tabadead,
    tabaeat,
    tabadeath,
    tabalove,
    tabamusic,
    tabanormal,
    poo,
    tabasick
  },
  displayImage: tabanormal,
};


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = defaultState;
    this.controlHungerLevel = this.controlHungerLevel.bind(this);
    this.handleStatusFill = this.handleStatusFill.bind(this);
    this.stateToDisplayImage = this.stateToDisplayImage.bind(this);
    this.checkIfSlept = this.checkIfSlept.bind(this);
    this.putToSleep = this.putToSleep.bind(this);
  }


  componentDidMount(){
    this.setStatusIntervals();
  }

  setStatusIntervals(){
    this.controlHungerLevelTimer = setInterval(() =>
      this.controlHungerLevel(),
    10000
    );
    this.controlSleepLevelTimer = setInterval(() =>
      this.controlSleepLevel(),
    60000
    );
    this.controlCleanlinessLevelTimer = setInterval(() =>
      this.controlCleanlinessLevel(),
    60000
    );
    this.controlBoredomLevelTimer = setInterval(() =>
      this.controlBoredomLevel(),
    15000
    );
  }

  stateToDisplayImage() {

    let newState = JSON.parse(JSON.stringify(this.state));
    if ((this.state.hunger < 7 || this.state.sleep < 4 || this.state.boredom < 5) && newState.displayImage != tabaangry) {
      newState.displayImage = tabaangry;
      this.setState(newState);
    }
    if (this.state.cleanliness < 5 && newState.poo != poo) {
      newState.poo = poo;
      this.setState(newState);
    } else if (this.state.cleanliness == 10 && newState.poo != null){
      newState.poo = null;
      this.setState(newState);
    }

    if (this.state.hunger >= 7 &&
      this.state.sleep >= 4 &&
      this.state.boredom >= 5 && newState.displayImage != tabanormal) {
      newState.displayImage = tabanormal;
      this.setState(newState);
    }
  }

  componentDidUpdate() {
    this.stateToDisplayImage();
    this.checkIfSlept();
    this.checkIfDead();
  }

  checkIfDead() {
    if (this.state.hunger == 0 && this.state.sleep == 0) {

    }
  }

  checkIfSlept() {
    if (this.state.inBed == true && this.state.sleep == 10) {
      clearInterval(this.increaseSleepLevelTimer);
      this.setStatusIntervals();
      let newState = JSON.parse(JSON.stringify(this.state));
      newState.inBed = false;
      this.setState(newState);
    }
  }

  putToSleep(){
    clearInterval(this.controlSleepLevelTimer);
    clearInterval(this.controlHungerLevelTimer);
    clearInterval(this.controlBoredomLevelTimer);
    clearInterval(this.controlCleanlinessLevelTimer);
    this.increaseSleepLevelTimer = setInterval(() =>
      this.increaseSleepLevel(),
    10000
    );
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
  increaseSleepLevel() {
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.sleep ++;
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


  handleStatusFill(input){
    let newState = JSON.parse(JSON.stringify(this.state));
    if (typeof newState[input] === 'number'){
      newState[input] = 10;
    } else {
      newState[input] = true;
      if (input == 'inBed') {
        this.putToSleep();
      }
    }
    this.setState(newState);
  }








  // update image on all levels

  // send levels to tama TamaContainer
  // write function in tamacontainer that changes images


  // Update states on button clicks:


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
          <Route exact path='/' render={()=><Play displayImage = {this.state.displayImage} poo = {this.state.poo} inBed = {this.state.inBed} onStatusFill={this.handleStatusFill} />} />
          <Route exact path='/dead' component={DeadComponent} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
