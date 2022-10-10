import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from '../assets/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from '../components/Logo';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          !isSidebarOpen
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks openSidebar={true} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
