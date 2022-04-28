import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';

export interface ProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  
  id: number;
  Nome: string;
  Marca: string;
  Cor?: string;
  Preco: number;
  Quantidade?: number;
  Imagem: string;
  Descrição: string;
}

export const ProductDetails: React.FC<ProductModalProps> = props => {
  return (
    <Modal
        id={props.id.toString()}
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={true}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      > 
        <button type="button" onClick={props.onRequestClose} className="close-modal">
          <MdClose />
        </button>
        <div className="details">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="details">
            <span>{props.id}</span>
            <br />
            <span>{props.Nome}</span>
            <br />
            <span>{props.Marca}</span>
            <br />
            <span>{props.Preco}</span>
            <br />
            <span>{props.Quantidade}</span>
            <br />
            <span>{props.Cor}</span>
          </div>
        </div>
      </Modal>
  )
}