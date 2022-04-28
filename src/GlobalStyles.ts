import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #6c0010;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Nunito", cursive;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
  }

  body {
    /* background: url('https://thumbs.gfycat.com/CarefreeDarkFlyingfish-mobile.mp4'); */
    --webkit-font-smoothing: antialised;
    position: relative;
    background: #000;
  }

  button {
    cursor: pointer;
    font-family: "Nunito", cursive;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #App {
    position: relative;
    background-color: linear-gradient(180deg, rgba(55,6,6,1) 15%, rgba(0,0,0,1) 48%, rgba(55,6,6,1) 79%);
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    overflow-y: scroll;
    width: 95%;
    height: 80vh;
    max-width: 600px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--red); 
      border-radius: 10px;
      padding: 1px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--red); 
    }
  }

  .close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: .3s ease;

    &:hover {
      transform: scale(1.3);
    }
  }
`