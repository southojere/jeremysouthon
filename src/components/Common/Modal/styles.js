const { default: styled } = require("@emotion/styled");

const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.3;
`;

const ModalContent = styled.div`
  position: relative;
  width: 60%;
  height: 70%;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  padding: 40px;
`;
export { ModalBackDrop, Modal, ModalContent };
