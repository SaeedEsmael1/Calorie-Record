import styles from './Modal.module.css';
import ReactDOM from 'react-dom';

const Overlay = (props) => {
    const {children, isOpen, onRequestClose} = props;
    return (
    isOpen &&
        <div className={styles.overlay} onClick={onRequestClose} >
            <div className={styles.children} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
const Modal = (props)=> {
    return ReactDOM.createPortal(<Overlay {...props}/>, document.body)
}
export default Modal;