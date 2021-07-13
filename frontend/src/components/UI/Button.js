import './Button.css'

/**
 * An stylized button component.
 */
const Button = (props) => {
    return (
        <button hidden={props.hidden} className='button' onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;