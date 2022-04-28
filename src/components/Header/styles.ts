import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  padding: 25px;
  margin: 0 1rem;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0px 5px 16px -9px #FFF;
  background: linear-gradient(180deg, rgba(55,6,6,1) 10%, rgba(0,0,0,1) 76%);
  z-index: 1;

  @media (max-width: 1000px) { 
    
  }
  
  nav {
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    transform: rotateX(-90deg);
    transition: .3s ease;

    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 20px;
    background: var(--background);

    border-radius: 0 0 1rem 1rem;
    
    &.opened { 
      transform: rotateX(0deg);
    }

    .menuItem {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      letter-spacing: .1rem;
      cursor: pointer;
      color: #000;
      text-decoration: none;

      > .Icon {
        margin-right: 5px;
      }

      &:hover { 
        .Icon {
          box-shadow: 0px 12px 16px -10px #000000;
          margin-bottom: 10px;
        }
      }
    }
  }

  .Logo { 
    max-width: 200px;
  }

  .Icon { 
    font-size: 2.2rem;
    border-radius: .5rem;
    margin-bottom: 0;
    cursor: pointer;
    transition: .3s ease;
    color: var(--shape);

    &:hover { 
      margin-bottom: 10px;
      box-shadow: 0px 12px 16px -10px #000000;
    }
  }
`