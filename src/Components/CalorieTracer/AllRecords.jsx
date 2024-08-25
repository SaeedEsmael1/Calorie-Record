import { useContext } from 'react';
import styles from './AllRecords.module.css';
import CalorieRecord from './CalorieRecord';
import { AppContext } from '../../app-context';
import { Link } from 'react-router-dom';
const AllRecords = (props) => {
    const {records}= props;
    const {totalCalories} = useContext(AppContext);
    const recordsLength = records.length;
  return (
    <div className={styles['all-records']}>
            {
                recordsLength ? (
                    records.map(record=> {
                        return (
                            <Link to={`${record.id}`} key={record.id}>
                                <CalorieRecord record={record} />
                            </Link>
                        )
                    })
                ): (
                    <h3>No Records Yet</h3>
                )
            }
            <p>Total Calories Are {totalCalories}</p>

    </div>
  )
}

export default AllRecords;