import React from 'react';
import classes from './Modal.module.css';

/**
 * A modal.
 * @param {object} props The properties
 * @param {boolean} props.show This attribute shows or hide the modal.
 * @param {function} props.onCancel This function is executed when the user cancel the modal.
 * @param {string} props.title The title of the modal.
 * @param {object} props.children All the elements passed into the modal body.
 */
const Modal = ({ show, onCancel, title, children }) => {
    if (!show) {
        return null
    }

    return (
        <div className={classes.modal} onClick={onCancel}>
            <div className={classes.modal__content} onClick={e => e.stopPropagation()}>
                <h2> {title} </h2>
                <div className={classes.modal__body}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;