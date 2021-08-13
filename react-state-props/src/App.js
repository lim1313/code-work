import React from 'react';
// TODO : React Router DOM을 설치 후, import 구문을 이용하여 BrowserRouter, Route, Switch 컴포넌트를 불러옵니다.

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
// TODO : MyPage, About 컴포넌트를 import 합니다.
import About from './Pages/About';
import MyPage from './Pages/MyPage';

import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='App'>
        <main>
          <Sidebar />
          <section className='features'>
            <Switch>
              <Route exact path='/'>
                <Tweets />
              </Route>
              {/* TODO : 유어클래스를 참고해서, 테스트 케이스를 통과하세요.*/}
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/mypage'>
                <MyPage />
              </Route>
            </Switch>
            {/*// TODO : React Router DOM 설치 후 BrowserRouter, Route의 주석을
            해제하고 Swtich 컴포넌트를 적절하게 작성합니다. */}
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;
