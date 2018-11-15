import React from 'react';
import PropTypes from 'prop-types';

function TamaContainer({displayImage, poo, inBed}) {


  return(
    <div className="outerContainer">
      <div className="play">
        <div className="imageContainer">
          <img src={displayImage} className="imageMain"/>
        </div>
        <img src={poo} className='poo'/>

      </div>
      {inBed ? (<div className='asleep'>ZZZzzzzzzz</div>) : (<div></div>)}


      <style jsx>{`
        .outerContainer{
          position: relative;
        }
        .play{
          display: flex;
          justify-content: center;
          align-items: flex-end;
          position: relative;
          top: 200px;
          left: 40px;
        }
        .imageContainer{
          overflow: hidden;
          width: 400px;
          height: 400px;
          z-index: -1;
        }
        .imageMain {
          position: relative;
          left: -300px;
          top: -200px;
        }
        .poo{
          height: 110px;
        }
        .asleep{
          position: absolute;
          top: 200px;
          height: 400px;
          width: 100%;
          background-color: black;
          z-index: 1;
          color: white;
          font-size: 4em;
          text-align: center;
        }
    `}
      </style>
    </div>
  );
}
TamaContainer.propTypes = {
  displayImage: PropTypes.string,
  poo: PropTypes.string,
  inBed: PropTypes.bool
};
export default TamaContainer;
