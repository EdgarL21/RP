import { Wrapper } from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
          <header>
            {/* <h3>Edgar's Portfolio</h3> */}
      <div class="container">
        <div class="row">
            <nav>
              <ul>
                <li>
                  <a class="li" href="#About-Me">
                    About Me
                  </a>
                </li>
                <li>
                  <a class="li" href="#Work">
                    Work
                  </a>
                </li>
                <li>
                  <a class="li" href="#Contact-Me">
                    Contact Me
                  </a>
                </li>
                <li>
                  <a class="li" href="#Resume" target="_blank">
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
