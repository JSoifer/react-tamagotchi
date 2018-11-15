import React from 'react';

function ButtonComponent({ buttonType, statusType, onStatusFill }) {

  function handleStatusFill() {
    onStatusFill(statusType)
  }

  return(
    <button onClick={handleStatusFill}>{buttonType}</button>
  );
}

export default ButtonComponent;
