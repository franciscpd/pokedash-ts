import styled from "styled-components";
import { Container as ContainerBase, ContainerProps } from "react-bootstrap";

export const Container = styled(ContainerBase)<ContainerProps>`
  margin-top: 2em;
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;

export const Image = styled.img`
  width: 200px;
`;
