import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className={classes.modal} onClick={props.onCancel}>
            <div className={classes.modal__content} onClick={e =>  e.stopPropagation()}>
                <h2> {props.title} </h2>
                <div className={classes.modal__body}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Modal;