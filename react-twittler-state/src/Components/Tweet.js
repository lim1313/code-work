import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet, deleteMsg }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr');

  let deleteClick = (e) => {
    deleteMsg(tweet);
  };

  return (
    <li className='tweet' id={tweet.id}>
      <div className='tweet__profile'>
        <img src={tweet.picture} />
      </div>
      <div className='tweet__content'>
        <div className='tweet__userInfo'>
          <div className='tweet__userInfo--wrapper'>
            {/* TODO : 유져 이름이 있어야 합니다. */}
            <span className='tweet__username'>{tweet.username}</span>
            {/* TODO : 트윗 생성 일자가 있어야 합니다. parsedDate를 이용하세요. */}
            <span className='tweet__createdAt'>{parsedDate}</span>
          </div>
          <div className='tweet__userInfo--buttonWrapper'>
            <div className='tweet__deleteButton'>
              <i class='far fa-trash-alt' onClick={(e) => deleteClick(e)}></i>
            </div>
          </div>
        </div>
        <div className='tweet__message'>
          {/* TODO : 트윗 메세지가 있어야 합니다. */}
          <div className='tweet__message'>{tweet.content}</div>
        </div>
      </div>
    </li>
  );
};

export default Tweet;
