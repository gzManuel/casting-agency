import './Button.css'

/**
 * An stylized button component.
 */
const Button = ({hidden, onClick, children}) => {
    return (
        <button hidden={hidden} className='button' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;