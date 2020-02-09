import React from 'react';
import './sectionMain.css';

import Feed from './Feed';
import ProfileSideBar from './ProfileSideBar';

function Main() {
  return (
    <section className="main">
      <Feed />
      <ProfileSideBar />
    </section>
  );
}


export default Main
