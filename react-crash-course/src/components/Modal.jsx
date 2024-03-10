import React from 'react';
import { useNavigate } from 'react-router-dom'
import classes from './Modal.module.css';
// props children change to specific value
function Modal({ children}) {

  const navigate = useNavigate();
  
  function closeHandler(){
  navigate("..");
  // SIMILAR TO /
  }
  return (
   <>
   <div className={classes.backdrop} onClick={closeHandler}/>
  
    <dialog open className={classes.modal}>
        {children}
    </dialog>
   </>
  )
}

export default Modal
