import { Wrapper } from "./Footer.styles";

import React from "react";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div class="col-6 col-md-2 contactLinksDiv">
            <a
              className="links shadow"
              href="https://twitter.com/explore"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </div>

          <div className="col-6 col-md-2 contactLinksDiv">
            <a
              className="links shadow"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>

          <div className="col-6 col-md-2 contactLinksDiv">
            <a
              className="links shadow"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>

          <div className="col-6 col-md-2 contactLinksDiv">
            <a
              className="links shadow"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              phone
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
