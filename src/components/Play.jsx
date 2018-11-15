import React from 'react';
import TamaContainer from './TamaContainer';
import ButtonContainer from './ButtonContainer';

function Play({ onStatusFill, displayImage}) {

  return(
    <div>
      <TamaContainer displayImage = {displayImage}/>
      <ButtonContainer onStatusFill={onStatusFill}/>


    </div>
  );

}

export default Play;
