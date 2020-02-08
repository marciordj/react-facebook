import React from 'react';
import ImgProfile from '../../../../../assets/img/person2.jpg';


export default function PostHeader() {
  return (
    <>
      <div className="post-header-profile-image">
        <div className="post-header-image-board">
          <img src={ImgProfile} alt="personal img"/>
        </div>
      </div>
      <div className="post-header-profile-name">
        <div className="profile-name">João da Silva</div>
        <div className="post-date">Feb 17 at 10:45PM</div>
      </div>
    </>
  );
}