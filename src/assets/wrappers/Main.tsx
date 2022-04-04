import styled from "styled-components";

const Wrapper = styled.main`
  height: 100%;
  min-height: calc(100vh - 15rem);
  background-color: ${(props) => props.theme.primaryLightCyan};
`;

export default Wrapper;
