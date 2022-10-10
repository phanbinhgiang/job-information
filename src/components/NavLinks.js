import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import links from '../utils/link';
import { toggleSidebar } from '../features/user/userSlice';
import { changeLinkActive } from '../features/linkActive/linkActiveSlice';

const NavLinks = ({ openSidebar = false }) => {
  const { linkActive } = useSelector((store) => store.linkActive);
  const dispatch = useDispatch();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, text, path, icon } = link;
        return (
          <Link
            to={path}
            className={linkActive === text ? 'nav-link active' : 'nav-link'}
            key={id}
            onClick={() => {
              dispatch(changeLinkActive(text));
              if (!openSidebar) {
                dispatch(toggleSidebar());
              }
            }}
          >
            <span className="icon">{icon}</span>
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
