import React from 'react';
import './post.css';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostAction from './PostAction';
import PostComments from './PostComments';
import PostSendCommentsForm from './PostSendCommentForm';

function Post() {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostAction />
      <PostComments />
      <PostSendCommentsForm />
    </div>
  )
}

export default Post
