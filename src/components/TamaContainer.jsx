import React from 'react';
import normal from '../assets/images/tabanormal.gif';

function TamaContainer({displayImage}) {

  // function determineImageShown () {
  //   if (hunger < 8){
  //     imageShown = 'angry';
  //   }
  // }
// { hunger, sleep, cleanliness, boredom, inBed, sick }

  return(
    <div className="play">
      <div className="imageContainer">
        <img src={displayImage}/>
      </div>

      <style jsx>{`
        .play{
          display: flex;
          justify-content: center;
          position: relative;
          top: 200px;
          left: 40px;
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

export default TamaContainer;
