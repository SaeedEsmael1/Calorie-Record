import styles from './Button.module.css';
import { memo } from 'react';
const Button = (props) => {
 
    const {children, varient, ...rest} = props;
    console.log('Re-rendering' + varient);
    // console.log('------------------------------------');
    return (
    <button 
        className={styles[`${varient}`]}
        {...rest}
    >
        {children}
    </button>
  )
}

export default memo(Button);