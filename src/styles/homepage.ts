import styled from "styled-components";

export const Container = styled.section`
  color: white;
  padding: 20px 25px;
  text-align: center;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  transition: 2s ease;
  opacity: 0;
  transform: scale(0);

  &.active {
    transform: scale(1);
    opacity: 1;
  }
  
  h1 { 
    margin-top: 2.5rem;

    @media (max-width: 1000px) { 
      margin-top: 2rem;
    }

    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 0px 12px 16px #000000;
  }

  p {
    margin-bottom: 25px;
    text-shadow: 0px 12px 16px #000000;
  }

  button {
    border: 1px solid var(--red);
    border-radius: 10px;
    color: white;
    background-color: var(--red);
    padding: 15px 30px;
    font-weight: bold;
    font-size: 1rem;
    margin-top: auto;
    transition: .4s ease;
    box-shadow: 0px 1px 20px -10px #FFF;

    &:hover {
      background: transparent;
      color: var(--shape);
    }
  }
`