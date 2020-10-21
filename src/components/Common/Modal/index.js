import ReactDOM from "react-dom";
import { useContext } from "react";
import { ModalContext } from "../../../context/modalContext";
import * as S from "./styles";
/**
 * Modal Implementation that will allow us to inject out Modal HTML higher in the DOM tree.
 */
const Modal = () => {
  const modalNode = useContext(ModalContext);

  return modalNode
    ? ReactDOM.createPortal(
        <S.Modal>
          <S.ModalBackDrop></S.ModalBackDrop>
          <S.ModalContent>
            <p>Title</p>
          </S.ModalContent>
        </S.Modal>,
        modalNode
      )
    : null;
};

export default Modal;
