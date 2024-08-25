import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef((props, ref)=>  {
    const {
        inputName,
        type,
        id,
        onBlur,
        isValid,
        ...rest
    } = props;
    
  return (
    <div className={styles[inputName]}>
        {type === 'meal' ? (
            <>
                <label htmlFor={id}>{inputName}</label>
                <select 
                    name={inputName} 
                    id={id}
                    onBlur={onBlur}
                    ref={ref}
                >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snacks">Snacks</option>
                </select>
                </>
        ) : (
            <>
                <label htmlFor={id}>{inputName}: </label>
                <input 
                    type={type}
                    name={inputName}
                    id={id}
                    onBlur={onBlur}
                    className={`${!isValid ? styles['not-valid']:''}`}
                    ref={ref}
                    {...rest}
                />
            </>
        ) }

    </div>
  )
});

export default Input;