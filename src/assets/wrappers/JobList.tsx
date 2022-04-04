import styled from "styled-components";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  row-gap: 4rem;
  padding-top: 6rem;

  @media screen and (min-width: 1200px) {
    width: 80%;
    padding-top: 8rem;
  }
`;

export default Wrapper;
