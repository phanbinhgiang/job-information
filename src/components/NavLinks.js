import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import links from '../utils/link';
import { toggleSidebar } from '../features/user/userSlice';

const NavLinks = ({ openSidebar = false }) => {
  const [linkActive, setLinkActive] = useState(links[0].text);
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
              setLinkActive(text);
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
