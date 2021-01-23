import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => (props.loggedIn ? "blue" : "red")};
`;
