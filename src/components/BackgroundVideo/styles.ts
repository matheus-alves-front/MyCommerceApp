import styled from "styled-components";

export const Container = styled.video`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 80px;
  bottom: 0;
  z-index: -1;

  @media (max-width: 1000px) {
    border-radius: 100%;
    overflow: hidden;
  }
`