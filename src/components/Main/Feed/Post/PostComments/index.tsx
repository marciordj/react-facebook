import React from 'react';

import Person3 from '../../../../../assets/img/person3.jpg';

function PostComments() {
  return (
    <div className="post-comments">
      <div className="comment">
        <div className="comment-profile-image">
          <div className="comment-image-board">
            <img src={Person3} alt="profile img" />
          </div>
        </div>
        <div className="comment-content">
          <div className="comment-profile-name">Fugiro Nakwonby</div>
          <div className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed
            eleifend id massa quis condimentum
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostComments
