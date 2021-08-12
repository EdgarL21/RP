import styled from "styled-components";

export const Wrapper = styled.header`

 header h1 {
  /* line-height: normal; */
}

header::after {
  content: "";
  display: table;
  clear: both;
} 

header {
  background: #1a1b26;
}
h3 {
  color: #bb9af7;
  font-size: 24px;
  float: left;

}

nav {
  float: right;
  background-color: #1a1b26;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  margin-left: 70px;
  padding-top: 50px;

  position: relative;
}

nav a {
  color: #bb9af7;
  text-decoration: none;
  text-transform: uppercase;
}

nav a:hover {
  color: #2ac3de;
}

nav a::before {
  content: "";
  display: block;
  height: 5px;
  background-color: #2ac3de;
  position: absolute;
  top: 0;
  width: 0%;

  transition: all ease-in-out 250ms;
}

nav a:hover::before {
  width: 100%;
}


`;