import React from 'react';
import './typing.css';

import Person1 from '../../../../../assets/img/person1.jpg';

function Typing() {
  return (
    <>
      <div className="typing active">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="image-board">
        <img src={Person1} alt="Profile img" />
      </div>
      <div className="profile-name">
        <span>Amarilda Curvada</span>
      </div>
      <div className="profile-info">
        <div>
          <span>347</span>
          <span>Followers</span>
        </div>
        <div>
          <span>94</span>
          <span>Following</span>
        </div>
      </div>
    </>
  )
}

export default Typing;
