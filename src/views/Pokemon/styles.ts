import styled from "styled-components";
import { Container as ContainerBase, ContainerProps } from "react-bootstrap";

export const Container = styled(ContainerBase)<ContainerProps>`
  & > h1 {
    text-transform: capitalize;
  }

  & > img {
    width: 200px;
  }
`;
