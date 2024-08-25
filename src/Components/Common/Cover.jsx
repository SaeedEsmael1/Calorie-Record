import styles from './Cover.module.css';

const Cover = (props) => {
    const {children} = props;
  return (
    <div className={styles.cover}>
        {children}
    </div>
  )
}

export default Cover;