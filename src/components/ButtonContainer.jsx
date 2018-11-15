import React from 'react';
import ButtonComponent from './ButtonComponent';
import PropTypes from 'prop-types';
function ButtonContainer({ onStatusFill }) {

  return(
    <div className="container">
      <div className="buttons">
        <ButtonComponent buttonType="Feed" statusType="hunger" onStatusFill={onStatusFill} />
        <ButtonComponent buttonType="Clean" statusType="cleanliness" onStatusFill={onStatusFill} />
        <ButtonComponent buttonType="Play" statusType="boredom" onStatusFill={onStatusFill} />
        <ButtonComponent buttonType="Medicate" statusType="sick" onStatusFill={onStatusFill} />
        <ButtonComponent buttonType="Put to Bed"  statusType="inBed" onStatusFill={onStatusFill} />
      </div>

      <style jsx>{`
            .container {
              display: flex;
              justify-content: center;
            }
            .buttons {
              margin-top: 200px;
              display: flex;
              justify-content: space-between;
              width: 300px;
            }
        `}</style>
    </div>
  );

}

ButtonContainer.propTypes = {
  onStatusFill: PropTypes.func
};

export default ButtonContainer;
