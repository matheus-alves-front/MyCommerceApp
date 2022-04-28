import { useEffect, useState } from "react"
import { BaseUrlApi, PhonesUrlApi } from "../api/productsApi";
import { Container } from "../styles/backoffice";

interface ProductTypes {
  id: number;
  Nome: string;
  Marca: string;
  Cor: string;
  Preco: number;
  PrecoAntigo: number;
  Memoria: string;
  Imagem: string;
  Descrição: string;
}


export function Backoffice() {
  const [Products, setProducts] = useState<ProductTypes[]>([])

  useEffect(() => {
    fetch(BaseUrlApi + PhonesUrlApi)
    .then(response => response.json())
    .then(data => setProducts(data));
  }, [])
  
  return (
    <Container>
      {Products.map((product, index) => (
        <ul key={product.id}>
          <li>{product.id}</li>
          <li><img src={product.Imagem} width={50} height={80} alt="" /></li>
          <li>{product.Nome}</li>
          <li>{product.Marca}</li>
          <li>{product.Cor}</li>
          <li>{product.Preco}</li>
          <li>{product.PrecoAntigo}</li>
          <li>{product.Memoria}</li>
          <li>{product.Descrição}</li>
        </ul>  
      ))}
    </Container>
  )
}