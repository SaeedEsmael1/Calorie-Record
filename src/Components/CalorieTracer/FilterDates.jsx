import { useContext } from 'react';
import styles from './FilterDates.module.css';
import AllRecords from './AllRecords';
import { AppContext } from '../../app-context';
const FilterDates = (props) => {
    const {records} = props;
    const { currentDate, currentDateStr, setCurrentDate} = useContext(AppContext);
    const onDateChange = (event)=> {
        setCurrentDate(event.target.value);
    }

    const FilteratedDates = (record)=> {
        return (
            currentDate.getDate() === record.date.getDate()&&
            currentDate.getMonth() === record.date.getMonth()&&
            currentDate.getFullYear() === record.date.getFullYear()
        )
    }

  return (
    <>
        <div className={`${styles['fliter-dates']}`}>
                <label htmlFor="filter-dates">Filter-dates</label>
                <input 
                    type="date" 
                    id='filter-dates'
                    onChange={onDateChange}
                    value={currentDateStr}
                />
        </div>
        <AllRecords 
            records={records.filter(FilteratedDates)}
        />
    </>

  )
}

export default FilterDates;