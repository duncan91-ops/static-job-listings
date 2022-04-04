import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-2.5rem);
  margin-top: -6rem;

  &.none {
    display: none;
  }

  .tags {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-right: 3rem;
  }

  .tag {
    display: flex;
    border-radius: 10px;
    /* align-items: center; */
  }

  .tag__text {
    background-color: ${(props) => props.theme.primaryLightCyan};
    color: ${(props) => props.theme.primaryCyan};
    font-weight: 700;
    font-size: 1.3rem;
    padding: 5px;
  }

  .btn {
    border: none;
  }

  .btn:hover {
    cursor: pointer;
  }

  .btn--remove {
    background-color: ${(props) => props.theme.primaryCyan};
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in;
  }

  .btn--remove:hover {
    background-color: ${(props) => props.theme.secondaryDarkCyan};
  }

  .btn--clear {
    background-color: transparent;
    color: ${(props) => props.theme.primaryDarkCyan};
    font-weight: 700;
    transition: all 0.3s ease-in;
  }

  .btn--clear:hover {
    color: ${(props) => props.theme.primaryCyan};
    text-decoration: underline;
  }

  @media screen and (min-width: 1200px) {
    margin-top: -8rem;
  }
`;

export default Wrapper;
