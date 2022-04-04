import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #fff;
  padding: 0 2rem 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);

  &:last-child {
    margin-bottom: 3rem;
  }

  &.featured {
    border-left: 5px solid ${(props) => props.theme.primaryCyan};
  }

  .content {
    border-bottom: 1px solid ${(props) => props.theme.primaryDarkCyan};
  }

  .logo-box {
    width: 5rem;
    height: 5rem;
    transform: translateY(-50%);
  }

  .logo {
    width: 100%;
  }

  .header,
  .details {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .header {
    margin-top: -1rem;
    margin-bottom: 1rem;
  }

  .details {
    margin-bottom: 2rem;
  }

  .company {
    font-weight: 700;
    color: ${(props) => props.theme.primaryCyan};
  }

  .new,
  .featured {
    border-radius: 100px;
    color: #fff;
    padding: 10px 12px 5px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  .new {
    background-color: ${(props) => props.theme.primaryCyan};
  }

  .featured {
    background-color: ${(props) => props.theme.secondaryDarkCyan};
  }

  .position {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    transition: all 0.3s ease-in;
  }

  .position:hover {
    color: ${(props) => props.theme.primaryCyan};
    cursor: pointer;
  }

  .detail {
    color: ${(props) => props.theme.primaryDarkCyan};
    font-size: 1.2rem;
  }

  .fullstop {
    width: 5px;
    height: 5px;
    background-color: ${(props) => props.theme.primaryDarkCyan};
    border-radius: 100px;
  }

  .tags {
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:last-child {
      margin-bottom: 12rem;
    }

    .content {
      border-bottom: none;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .logo-box {
      transform: translateY(0);
      width: 8.8rem;
      height: 8.8rem;
    }

    .header {
      margin-top: 0;
    }

    .details {
      margin-bottom: 0;
    }

    .tags {
      padding-top: 0;
    }
  }
`;

export default Wrapper;
