import styled from "@emotion/styled";
import { motion } from "framer-motion";
const Modal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackDrop = styled(motion.div)`
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

const ModalContent = styled(motion.div)`
  position: relative;
  width: 20%;
  height: 50%;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  padding: 40px;
`;

const SpringUp = {
  initial: { opacity: 0, top: "80%" },
  animate: { opacity: 1, top: "50%" },
  transition: { type: "spring" },
};
export { ModalBackDrop, Modal, ModalContent, SpringUp };
