import { Container } from './styles'
import { useEffect, useState } from 'react';

import { BaseUrlApi, PhonesUrlApi, MockApi } from "../../api/productsApi";

import { BsWhatsapp } from 'react-icons/bs';

interface ProductTypes {
  id: number;
  Nome: string;
  Marca: string;
  Cor: string;
  Preco: number;
  Memoria: string;
  Imagem: string;
  Descrição: string;
}

export function ProductCard() {
  const [Products, setProducts] = useState<ProductTypes[]>([])

  // useEffect(() => {
  //   fetch(BaseUrlApi + PhonesUrlApi)
  //   .then(response => response.json())
  //   .then(data => setProducts(data));
  // }, [])

  useEffect(() => {
    setProducts(MockApi.phones);
  }, [])

  function currencyFormat<T>(num: number) {
    return (
      new Intl.NumberFormat('pt-BR',  {
        style: 'currency',
        currency: 'BRL',
      }).format(num)
    )
  }

  return (
    <>
      {Products.map((product, index) => (
        <Container key={product.id}>
          <div className="img">
            <img 
              src={product.Imagem} 
              alt={product.Nome} 
            />
          </div>
          <div className="details">
            <span className="name">{product.Nome}</span>
            <span className="oldPrice"><del>R$500,00</del></span>
            <span className="price">{currencyFormat(product.Preco)}</span>
            <button>Detalhes</button>
          </div>
          <div className="informations">
            <div className="info">
              <span className="label">Marca</span>
              <span>{product.Marca}</span>
            </div>
            <div className="info">
              <span className="label">Memória</span>
              <span>{product.Memoria}</span>
            </div>
            <div className="info">
              <span className="label">Cor</span>
              <span>{product.Cor}</span>
            </div>
            <div className="info">
              <span className="label">Descrição</span>
              <span>{product.Descrição}</span>
            </div>
            <a target='_blank' 
              href={`https://api.whatsapp.com/send?phone=5524998274080&text=eu%20gostaria%20de%20saber%20sobre%20o%20produto%20${product.Nome}%20de%20${product.Memoria}%20com%20o%20pre%C3%A7o%20${currencyFormat(product.Preco)}%20,%20quais%20cores%20tem%20disponíveis?`}
              >
                <BsWhatsapp /> Consultar
            </a>
          </div>
        </Container>
      ))}
    </>
  )
}
