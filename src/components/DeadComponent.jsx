import React from 'react';
import dead from '../assets/images/tabadead.gif';

function DeadComponent() {

  return(

    <div className="dead">
      <div className="imageContainer">
        <img src={dead}/>
      </div>

      <style jsx>{`
      .dead{
        display: flex;
        justify-content: center;
        position: relative;
        top: 200px;
      }
      .imageContainer{
        overflow: hidden;
        width: 400px;
        height: 400px;

      }
      img {
        position: relative;
        left: -300px;
        top: -200px;

      }
  `}
      </style>
    </div>

  );
}

export default DeadComponent;
