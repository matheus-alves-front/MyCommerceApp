import Modal from 'react-modal';
import { useState } from 'react';

import { Container } from "./styles";
import { ProductCard } from "../ProductCard";
import { ProductDetails } from "../ProductDetails";

// Modal.setAppElement('#root')

export function ProductGrid() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // function handleOpenModal() {
  //   setIsModalOpen(true);
  // }

  // function handleCloseModal() {
  //   setIsModalOpen(false);
  // }

  return (
    <Container>
      <ProductCard />
    </Container>
  )
}