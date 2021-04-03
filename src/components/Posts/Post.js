import React, {useState} from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post } = props;

  const [likes, setLikes] = useState [post.likes];

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}/>
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <likeSection incrementLikes={incrementLikes} numberOfLikes = {likes} />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
