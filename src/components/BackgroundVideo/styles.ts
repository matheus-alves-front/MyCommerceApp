import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
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