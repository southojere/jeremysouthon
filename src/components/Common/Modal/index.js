import { useContext } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";
import { ModalContext } from "../../../context/modalContext";
import * as S from "./styles";
/**
 * Modal Implementation that will allow us to inject out Modal HTML higher in the DOM tree.
 */
const Modal = ({ visible, onClose, children }) => {
  const modalNode = useContext(ModalContext);

  return modalNode
    ? ReactDOM.createPortal(
        <AnimatePresence>
          {visible && (
            <S.Modal>
              <S.ModalBackDrop
                onClick={onClose}
                exit={{
                  opacity: 0,
                }}
              ></S.ModalBackDrop>
              <S.ModalContent
                initial="initial"
                animate="animate"
                exit={{
                  top: "120%",
                  opacity: 0,
                  transition: {
                    type: "spring",
                  },
                }}
                variants={S.SpringUp}
              >
                {children}
              </S.ModalContent>
            </S.Modal>
          )}
        </AnimatePresence>,
        modalNode
      )
    : null;
};

PropTypes.Modal = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onOk: PropTypes.func,
};

export default Modal;
