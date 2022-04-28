import { useState } from "react";
import { Container } from ".././styles/homepage";

interface HomePageProps {
  EnterStore: ()  => void;
}

export function HomePage({EnterStore}: HomePageProps) {
  const [isActive, setIsActive] = useState(false)

  
    setTimeout(
      function() {
        setIsActive(true)
      },
      2000
  );

  return (
    <Container className={isActive ? 'active' : ''}>
      <h1>Bem vindo ao Baumgratz Imports</h1>
      <p>Encontre seu produto Apple e entre em contato</p>
      <button onClick={EnterStore}>Ver Produtos</button>
    </Container>
  )
}