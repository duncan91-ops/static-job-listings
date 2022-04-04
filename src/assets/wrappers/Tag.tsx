import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.secondaryLightCyan};
  color: ${(props) => props.theme.primaryCyan};
  font-weight: 700;
  padding: 10px 12px;
  border-radius: 5px;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryCyan};
    color: #fff;
  }
`;
export default Button;
