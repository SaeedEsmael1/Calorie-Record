import styles from './Date.module.css';
import Cover from '../Common/Cover';

const Date = (props) => {
  const {date} = props;
  const day = date.getDate();
  const month = date.toLocaleString('default', {month:'short'});
  const year = date.getFullYear();
  return (
    <div className={styles.date}>
      <Cover>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
        <span className={styles.year}>{year}</span>
      </Cover>

    </div>
  )
}

export default Date;