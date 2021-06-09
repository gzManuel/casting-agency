import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    if (!props.show) {
        return null
    }

    return (
        <div className={classes.modal} onClick={props.onCancel}>

            <div className={classes.modal__content} onClick={e =>  e.stopPropagation()}>
                
                <div className={classes.modal__body}>
                    {props.body}
                </div>
                <div className={classes.modal_footer}>
                    {props.footer}
                </div>
            </div>
        </div>
    );
};

export default Modal;