import { Outlet, Link } from "react-router-dom";
import { SideNavContainer, SideNav } from '../styled/sidenav';

const Layout = () => {

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
            </SideNavContainer>
          </SideNav>
          <Outlet />
        </div>
    </>
  )
};

export default Layout;
