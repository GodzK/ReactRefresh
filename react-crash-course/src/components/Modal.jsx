import React from 'react';
import classes from './Modal.module.css';
// props children change to specific value
function Modal({ children , onClose }) {
  return (
   <>
   <div className={classes.backdrop} onClick={onClose}/>
   {/*{children} อ้างถึงcontentที่modalคุมอยู่  openคือถ้าdialog open=true*/}
    <dialog open= {true}className={classes.modal}>
        {children}
    </dialog>
   </>
  )
}

export default Modal
