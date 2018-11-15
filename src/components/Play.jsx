import React from 'react';
import TamaContainer from './TamaContainer';
import ButtonContainer from './ButtonContainer';
import PropTypes from 'prop-types';

function Play({ onStatusFill, displayImage, poo, inBed }) {

  return(
    <div>
      <TamaContainer displayImage = {displayImage} poo = {poo} inBed = {inBed}/>
      <ButtonContainer onStatusFill={onStatusFill}/>


    </div>
  );

}
Play.propTypes = {
  onStatusFill: PropTypes.func,
  displayImage: PropTypes.string,
  poo: PropTypes.string,
  inBed: PropTypes.bool
};
export default Play;
