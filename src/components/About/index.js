import { Wrapper } from "./About.styles";

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12">
            <a
              href="https://github.com/EdgarL21/ReactPortfolio.git"
              className="links"
              target="_blank"
              rel="noreferrer"
            >
              {/* <!-- Large Image  --> */}
              <div className="img-text">Portfolio Repository</div>
            </a>

            <p className="shadow bio">
              My name is Edgar and I'm currently taking the UC Davis Coding
              BootCamp. I want to become a Web Developer. I had only taken 1
              class on C++ before taking this bootcamp. Some of the new
              technologies that I've learned while taking this bootcamp, are
              HTML, CSS, Javascript, API, Node, Express, Handlebars MySQL,
              MongoDB. Ive leanred many things, but I still have a long way to
              go.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vitae
              animi voluptatum reprehenderit nulla sunt vel blanditiis! Nam iste
              adipisci suscipit, voluptates aperiam cumque voluptatum dolore
              recusandae modi repellendus hic! periores eligendi, dignissimos
              expedita perferendis amet aperiam, dolor aspernatur ullam iure
              commodi quis perspiciatis accusantium maiores. Sint porro voluptas
              vel?
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sapiente asperiores eligendi, dignissimos expedita perferendis
              amet aperiam, dolor aspernatur ullam iure commodi quis
              perspiciatis accusantium maiores. Sint porro voluptas vel?
              periores eligendi, dignissimos expedita perferendis amet aperiam,
              dolor aspernatur ullam iure commodi quis perspiciatis accusantium
              maiores. Sint porro voluptas vel?
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;
