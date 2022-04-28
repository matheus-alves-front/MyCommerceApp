import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin: auto;
  top: 80px;
  bottom: 0;
  z-index: -1;
  display: flex;
  align-items: center;

  video {
    width: 100%;
    display: block;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0px 2px 15px -5px white;
  }

  @media (max-width: 1000px) {
    border-radius: 100%;
    overflow: hidden;
  }
`