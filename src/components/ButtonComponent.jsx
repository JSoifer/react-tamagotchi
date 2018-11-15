import React from 'react';
import PropTypes from 'prop-types';

function ButtonComponent({ buttonType, statusType, onStatusFill }) {

  function statusFill() {
    onStatusFill(statusType);
  }

  return(
    <button onClick={statusFill}>{buttonType}</button>
  );
}
ButtonComponent.propTypes = {
  buttonType: PropTypes.string,
  statusType: PropTypes.string,
  onStatusFill: PropTypes.func
};
export default ButtonComponent;
