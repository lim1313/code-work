import React, { useState } from 'react';
import './App.css';
import { dummyTweets, dummyNotice } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'

console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = ({tweets, click}) => {

  let trueClick = () =>{
    click(true)
  }

  let falseClick = () => {
    click(false)
  }

  return (
    <section className="sidebar">
      {/* <FontAwesomeIcon className = "far fa-comment-dots" icon={faCommentDots}/> */}
      {/* TODO : 메세지 아이콘을 작성합니다. */}
      {/* <FontAwesomeIcon  icon={faBell}/> */}
      <i className="far fa-comment-dots" onClick={trueClick}/>
      <i className = "far fa-bell" onClick={falseClick}/>
    </section>
  );
};

const Counter = ({tweets}) => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          {/* TODO : dummyTweet로 전달되는 데이터의 갯수를 보여줍니다. */}
          { tweets ? 
          `total : ${dummyTweets.length}` :
          "알림을 확인하세요"
          }
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer>
    copyright@2021 code States
  </footer>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

const Tweets = ({tweets}) => {

  return (
    <ul className="tweets">
      {tweets ? 
      dummyTweets.map((tweet) => {
        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              {/* TODO: 트윗 저자의 프로필 사진이 있어야 합니다.  */}
              <img src = {tweet.picture} key={tweet.id}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className = {tweet.username === "parkhacker" ? "tweet__username tweet__username--purple" : "tweet__username"}>{tweet.username}</span>
                {/* TODO : 이름이 "parkhacker"인 경우, 이름 배경색을 rgb(235, 229, 249)으로 바꿔야 합니다. */}
                {/* TODO : 트윗 생성 일자가 있어야 합니다. */}
                <span className = "tweet__createdAt">{tweet.updatedAt}</span>
              </div>
               <div className = "tweet__message ">{tweet.content}</div>
            </div>
          </li>
        );
      }) : 
      dummyNotice.map((notice) => {
        return (
          <div className = "notification__message" key = {notice.id}>{notice.content}</div>
        )
      })
      }
    </ul>
  );
};

const Features = ({tweets}) => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter tweets = {tweets}/>
        </div>
      </div>
      <Tweets tweets = {tweets}/>
      <Footer tweets = {tweets}/>
    </section>
  );
};

const App = () => {
  const [tweets, setTweets] = useState(true)

  let click = (v) =>{
    setTweets(v)
  }

  return (
    <div className="App">
      <main>
        <Sidebar tweets = {tweets} click = {click}/>
        <Features tweets = {tweets}/>
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
