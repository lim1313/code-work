// TODO : useState를 react로 부터 import 합니다.
import React, { useState, useRef } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  // TODO : 새로 트윗을 작성하고 전송할 수 있게 useState를 적절히 활용하세요.
  let [name, setName] = useState('');
  let [text, setText] = useState('');
  let [selectUser, setSelectUser] = useState(dummyTweets);
  let [dummy, setDummy] = useState(dummyTweets);

  console.log(dummy);

  let nameChange = (e) => {
    setName(e.target.value);
  };

  let textChange = (e) => {
    setText(e.target.value);
  };

  const handleButtonClick = () => {
    const tweet = {
      id: Date.now(),
      username: name,
      picture: 'https://randomuser.me/api/portraits/men/98.jpg',
      content: text,
      createdAt: Date(),
      updatedAt: Date(),
    };
    setSelectUser([tweet, ...dummy]);
    setDummy([tweet, ...dummy]);
    setName('');
    setText('');
  };

  const handleChangeUser = (e) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setSelectUser(
      e.target.value !== 'all user'
        ? dummy.filter((v) => v.username === e.target.value)
        : dummy
    );
  };

  const deleteMsg = (v) => {
    let value = dummy.filter((a) => a.id !== v.id);
    setDummy(value);
    console.log(dummy);
    setSelectUser(value);
  };

  const handleChangeMsg = (e) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
  };

  return (
    <React.Fragment>
      <div className='tweetForm__container'>
        <div className='tweetForm__wrapper'>
          <div className='tweetForm__profile'>
            <img src='https://randomuser.me/api/portraits/men/98.jpg' />
          </div>
          <div className='tweetForm__inputContainer'>
            <div className='tweetForm__inputWrapper'>
              <div className='tweetForm__input'>
                <input
                  type='text'
                  placeholder='your username here..'
                  className='tweetForm__input--username'
                  value={name}
                  onChange={nameChange}
                  // ref={nameInput}
                ></input>
                {/* TODO : 트윗을 작성할 수 있는 textarea 엘리먼트를 작성하세요. */}
                <textarea
                  className='tweetForm__input--message'
                  value={text}
                  onChange={textChange}
                  // ref={textInput}
                ></textarea>
              </div>
              <div className='tweetForm__count' role='status'>
                <span className='tweetForm__count__text'>
                  {/* TODO : 트윗 총 개수를 보여줄 수 있는 Counter를 작성하세요. */}
                  {'total: ' + dummy.length}
                </span>
              </div>
            </div>
            <div className='tweetForm__submit'>
              <div className='tweetForm__submitIcon'></div>
              {/* TODO : 작성한 트윗을 전송할 수 있는 button 엘리먼트를 작성하세요. */}
              <button
                className='tweetForm__submitButton'
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='tweet__selectUser'>
        <select onChange={handleChangeUser}>
          <option>all user</option>
          {selectUser.map((v) => (
            <option key={v.id}>{v.username}</option>
          ))}
        </select>
      </div>
      <ul className='tweets'>
        {/* TODO : 하나의 트윗이 아니라, 주어진 트윗 목록(dummyTweets) 갯수에 맞게 보여줘야 합니다. */}
        {selectUser.map((v) => (
          <Tweet key={v.id} tweet={v} deleteMsg={(e) => deleteMsg(e)} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
