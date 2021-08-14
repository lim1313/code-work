import React from 'react';
import { NavLink } from 'react-router-dom';
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다.

const Sidebar = () => {
  return (
    <section className='sidebar'>
      {/* TODO : Link 컴포넌트를 작성하고, to 속성을 이용하여 경로(path)를 연결합니다. */}
      <NavLink activeClassName='active' exact to='/'>
        <i className='far fa-comment-dots'></i>
      </NavLink>
      <NavLink activeClassName='active' to='/about'>
        <i className='far fa-question-circle'></i>
      </NavLink>
      <NavLink activeClassName='active' to='/mypage'>
        <i className='far fa-user'></i>
      </NavLink>
    </section>
  );
};

export default Sidebar;
