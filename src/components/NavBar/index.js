import { Wrapper } from "./NavBar.styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Wrapper>
          <header>
            {/* <h3>Edgar's Portfolio</h3> */}
      <div className="container">
        <div className="row">
            <nav>
              <ul>
                <li>
                  <Link className="li" to={'/'}>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link className="li" to={'portfolio'}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="li" to={'contact'}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a className="li" href="#Resume" target="_blank">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
        </div>
      </div>
          </header>
    </Wrapper>
  );
};

export default NavBar;
