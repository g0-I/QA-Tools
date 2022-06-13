import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { SideNavContainer, SideNav } from '../styled/sidenav';
import Drawer from '@material-ui/core/Drawer';


const Layout = () => {

  const [open, setopen] = useState(false);
  const toggleOpen=() => {
      setopen(!open);
  }

  return (
    <>
  <div style={{ display: 'flex' }}>
    <SideNav>
      <SideNavContainer>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/encode">Endode</Link>
          </li>
          <li>
            <Link to="/decode">Decode</Link>
          </li>
          <li>
            <Link to="/unix">UnixTime</Link>
          </li>
        </ul>
        <button onClick={toggleOpen}>hoge</button>
            <Drawer anchor='left' open={open} onClose={toggleOpen}>
                <p>hello</p>
            </Drawer>

      </SideNavContainer>
    </SideNav>
      <Outlet />
  </div>
    </>
  )
};

export default Layout;
