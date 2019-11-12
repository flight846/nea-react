import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';

const NavbarItem = props => {
  const { item, active } = props;
  const hasSubMenu = item.subMenus?.length > 0;
  const openActive = active === item.name || item.subMenus?.find(subMenu => subMenu.name === active);

  const [isOpen, toggle] = useState(openActive);

  return (
    <li className={`${item.className} ${active === item.name ? 'active' : ''}`}>
      {/* <Link className="downArrow" to={menu.href}>{menu.name}</Link> */}
      {hasSubMenu && (
        <>
          <a className={`${isOpen ? 'upArrow' : 'downArrow'}`} onClick={() => toggle(oldValue => !oldValue)}>
            {item.name}
          </a>

          <Collapse isOpen={isOpen}>
            <ul className="subNav subNavCont">
              {item.subMenus &&
                item.subMenus.map((subMenu, sIndex) => (
                  <li
                    key={`navbar_menu_${item.name}_submenu_${sIndex + 1}`}
                    className={`${active === subMenu.name ? 'active' : ''}`}
                  >
                    <Link to={subMenu.href}>{subMenu.name}</Link>
                  </li>
                ))}
            </ul>
          </Collapse>
        </>
      )}
      {!hasSubMenu && <Link to={item.href}>{item.name}</Link>}
    </li>
  );
};

export default NavbarItem;
