import React, {FC} from "react";

//CSS
import styles from "./BoardBar.module.css";
import Container from "./components/BoardBarContainer";
import Nav from "./components/BoardBarNav";
import NavItem from "./components/BoardBarNavItem";
import Wrapper from "./components/BoardBarWrapper";

//COMPONENTS

const BoardBar: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <NavItem>
              about
          </NavItem>
          <NavItem>
              contact
          </NavItem>
          <NavItem>
              more
          </NavItem>
          <NavItem>
              love
          </NavItem>
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default BoardBar;
