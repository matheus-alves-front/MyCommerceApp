import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-content: space-between;
  padding: 20px 25px;
  margin-top: 10px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 275px));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`