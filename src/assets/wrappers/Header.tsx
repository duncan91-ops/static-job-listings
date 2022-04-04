import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: 15rem;
  background: url("/assets/images/bg-header-mobile.svg") center / 100% 100%
    no-repeat;
  background-color: ${(props) => props.theme.primaryCyan};

  @media screen and (min-width: 1200px) {
    background: url("/assets/images/bg-header-desktop.svg") center / 100% 100%
      no-repeat;
    background-color: ${(props) => props.theme.primaryCyan};
  }
`;

export default Wrapper;
