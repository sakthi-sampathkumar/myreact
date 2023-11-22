import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <h1>layout</h1>
      <nav>
      <ul>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact/123">Contact</Link>
          </li>
          <li>
            <Link to="/page">Pages</Link>
          </li>         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;