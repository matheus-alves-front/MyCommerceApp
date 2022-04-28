import styled from "styled-components";

export const Container = styled.div`
  color: white;
  margin-top: 50px;

  ul {
    display: flex;
    flex-wrap: wrap;
    

    & + ul {
      margin-top: 10px;
    }

    li {
      display:block;
      margin: 0 5px;
    }
  }
`