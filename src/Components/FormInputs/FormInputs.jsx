import { useContext, useEffect, useReducer, useRef, useCallback, useMemo } from 'react';
import styles from './FormInputs.module.css';
import { AppContext } from '../../app-context';
import Input from '../Common/Input';
import Button from '../Common/Button';
const DEFAULTVALUES = {
    meal:true,
    content:false,
    calories:false,
}

const reducerFn = (state, action) => {
    const {value, type, axularyValue}= action;

    let isValid = false;
    switch(type) {
        case 'RESET': {
            return DEFAULTVALUES;
        }
        case 'content': {
            if (
                value !== 'sports' && axularyValue > 0||
                value === 'sports' && axularyValue < 0
            ) {
                // console.log('Yes')
                isValid = true;
            }
            return {
                ...state,
                content: !!value,
                calories: isValid
            }
        }
        case 'calories': {
            if (
                value > 0 && axularyValue !== 'sports' ||
                value < 0 && axularyValue === 'sports'
            ) {
                isValid = true;
            }
            return {
                ...state,
                calories: isValid,
            }
        }
        default : {
            return {
                ...state,
                [type]: !!value,
            }
        }
    }
}

const FormInputs = (props) => {
    const {addNewrecord, setIsOpen} = props;
    const {currentDate, currentDateStr, setCurrentDate, totalCalories} = useContext(AppContext);
    const [state, dispatchFn] = useReducer(reducerFn, DEFAULTVALUES);
    const {
            content:isContentValid, 
            calories:isCaloriesValid
        } = state;


    const isFormValid = useMemo(()=> {
        return !!currentDateStr && isContentValid && isCaloriesValid;
    }, [currentDateStr, isContentValid, isCaloriesValid])

    useEffect(()=> {
        if(!isContentValid) {
            contentRef.current.focus();
        }
    }, [isContentValid]);

    const contentRef = useRef('');
    const caloriesRef = useRef(0);
    const mealRef = useRef('');


    const onDateChange = (event)=> {
        setCurrentDate(event.target.value);
    }
    
    const onMealBlur  = (event)=> {
        dispatchFn({type:'meal', value:event.target.value})
    }

    const onContentBlur  = (event)=> {
        dispatchFn({type:'content', value:event.target.value, axularyValue:+caloriesRef.current.value});
    }

    const onCaloriesBlur  = (event)=> {
        dispatchFn({type:'calories', value:+event.target.value, axularyValue:contentRef.current.value});
    }

    const onSubmitHandler =  (event)=> {
        event.preventDefault();
        addNewrecord(
            {
                date:currentDate,
                meal:mealRef.current.value,
                content:contentRef.current.value,
                calories:caloriesRef.current.value,
            }
        );
        setIsOpen(false);
    }

    const cansel = useCallback(()=> {
        if(isFormValid) {
            setIsOpen(false)
        }
    }, [isFormValid])

  return (
    <div className={styles['form-container']}>
        <div className={`${styles.container} container`}>
            <p className={styles['total-calories']}>Total Calories Are {totalCalories} </p>
            <form className={styles.form}>

                <Input
                    inputName='date'
                    type='date'
                    id='date'
                    value={currentDateStr}
                    onChange={onDateChange}
                    isValid={currentDate}
                />

                
                <Input
                    inputName='meal'
                    type='meal'
                    id='meal'
                    onBlur={onMealBlur}
                    ref={mealRef}
                />
                
                <Input
                    inputName='content'
                    type='text'
                    id='content'
                    onBlur={onContentBlur}
                    isValid={isContentValid}
                    ref={contentRef}
                />

                <Input
                    inputName='calories'
                    type='number'
                    id='calories'
                    onBlur={onCaloriesBlur}
                    isValid={isCaloriesValid}
                    ref={caloriesRef}
                />

                <div className={styles.footer}>
                    <Button 
                        onClick={onSubmitHandler}
                        varient='primary'
                        disabled={!isFormValid}
                    >
                        Add Record
                    </Button>

                    <Button 
                        onClick={cansel}
                        type='button'
                        varient='secondry'
                    >
                        Cancel
                    </Button>

                </div>
            </form>
        </div>

    </div>
  )
}

export default FormInputs;