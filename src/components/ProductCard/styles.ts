import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 1px 17px 0px #000000;
  border-radius: 10px;
  position: relative;
  overflow: visible;

  .img {
    background-color: var(--shape);
    height: 100%;
    padding: .8rem;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .animation {
    perspective: 600px;
    transform-style: preserve-3d;
    position: relative;
    min-height: 150px;
    height: inherit;
    
    .details, .informations {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    .details {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background: white;
      padding: 5px;
  
      position: absolute;
      width: 100%;
      min-height: 150px;
      bottom: 0px;
      transform: rotateX(0deg) translateZ(0px);
      transition: 1s ease;
  
      .name {
        margin-bottom: .5rem;
      }
  
      .oldPrice {
        font-size: .7rem;
        color: var(--red);
      }
  
      .price {
        margin-bottom: 1rem;
      }
  
      button {
        font-size: 1.2rem;
        font-weight: bold;
        border: 1px solid var(--red);
        border-radius: 5px;
        background-color: var(--red);
        color: var(--shape);
        padding: 5px 0;
        transition: .3s ease;
  
        &:hover {
          background-color: var(--shape);
          color: var(--red);
  
          .information & {
            height: auto;
          }
        }
      }
  
    }
    .informations {
      display: flex;
      flex-direction: column;
      background: var(--background);
      padding: 5px;
      width: 100%;
      min-height: 150px;
      position: absolute;
      bottom: 0px;
      transform: rotateX(100.4deg) translateZ(0px);
      opacity: 0;
      transition: 1s ease;
  
      .info {
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
        span {
          font-size: 1.2rem;
          
          &.label {
            color: var(--red);
            font-size: .7rem;
          }
        }
      }
  
      a {
        margin: -5px -5px;
        margin-top: auto;
        display: block;
        text-decoration: none;
        
        background: var(--green);
        color: var(--shape);
        text-shadow: 1px 0px 0px #EEEEEE;
        border-top: 2px solid var(--green);
        border-radius: 5px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        
        padding: 10px 0;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: center;
        transition: .5s ease;
  
        &:hover {
          background: var(--shape);
          color: var(--green);
          /* text-shadow: none; */
        }
      }
    }
  }


  &:hover {
    .informations {
      transform: rotateX(0deg) translateZ(0px);
      opacity: 1;
    }
    .details {
      transform: rotateX(-110deg) translateZ(90px)
    }
  }
`

