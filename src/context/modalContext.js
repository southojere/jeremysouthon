import React, { createContext, useEffect, useRef, useState } from "react";
const ModalContext = createContext();
/**
 * This allows our children DOM elements a reference to the `modalRoot` element.
 * Motivation 
 * - Avoid deeply nested modal components. 
 * - Modals have a higher visual precedence over all other elements so should be higher in the DOM tree to avoid conflicts.
 * 
 * There are loads of examples/docs about implementing modals using Context API & React Portals. Give it a google for more info.
 */
const ModalProvider = ({ children }) => {
  const modalRef = useRef();

  const [context, setContext] = useState();

  useEffect(() => {
    setContext(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
      <div id="modalRoot" ref={modalRef}></div>
    </>
  );
};

export { ModalContext, ModalProvider };
