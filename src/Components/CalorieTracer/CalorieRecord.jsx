import styles from './CalorieRecord.module.css';
import Date from './Date';
import Cover from '../Common/Cover';
import { useEffect, useContext } from 'react';
import { AppContext } from '../../app-context';
const CalorieRecord = (props) => {
    const {record} = props;
    const {setTotalCalories} = useContext(AppContext);
    useEffect(()=> {
      setTotalCalories(prev=> prev + record.calories);
      return ()=>{ 
        setTotalCalories(prev=> prev - record.calories);
      }
    }, [record.calories]);


  return (
    <ul className={styles.record}>
        <li> <Date date={record.date}/> </li>
        <li className={styles.meal}>{record.meal}</li>
        <li className={styles.content}>{record.content}</li>
        <li className={styles.calories}>
            <Cover>
                {record.calories}
            </Cover>
            
        </li>
    </ul>
  )
}

export default CalorieRecord;