import React from 'react';
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link, NavLink, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router';

const Sidebar = ({ history }) => {
  const goBack = () => {
    history.goBack();
  };

  let location = useLocation();
  console.log(location);

  return (
    <section className='sidebar'>
      {/* TODO : About 메뉴 아이콘과 Mypage 메뉴 아이콘을 작성하고 Link 컴포넌트를 이용하여 경로(path)를 연결합니다. */}
      <i class='fas fa-backward' onClick={goBack}></i>
      <NavLink activeClassName='active' exact to='/'>
        <i className='far fa-comment-dots'></i>
      </NavLink>
      <NavLink activeClassName='active' to='/about'>
        <i className='far fa-question-circle'></i>
      </NavLink>
      <NavLink activeClassName='active' to='/mypage'>
        <i class='far fa-user'></i>
      </NavLink>
    </section>
  );
};

export default withRouter(Sidebar);
