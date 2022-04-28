import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  row-gap: 50px;
  justify-content: space-between;
  padding: 20px 25px;
  margin-top: 10px;

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 350px));
  }

  @media (max-width: 585px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }


  @media (max-width: 524px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
`