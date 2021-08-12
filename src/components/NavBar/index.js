import { Wrapper } from "./NavBar.styles";

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
                  <a className="li" href="#About-Me">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="li" href="#Work">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="li" href="#Contact-Me">
                    Contact Me
                  </a>
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
