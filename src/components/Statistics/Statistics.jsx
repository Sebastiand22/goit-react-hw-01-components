import styles from './Statistics.module.css';
import PropTypes from 'prop-types';


const getRandomColors = (count) => {
    // Generează un array de culori aleatorii
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
    return colors;
  };


const Statistics = ({ title, stats }) => {
    const colors = getRandomColors(stats.length);
    return (
      <div className={styles.container}>
        {title && <h2>{title}</h2>}
  
        <div className={styles.sectionStats}>
          <ul className={styles.list}>
            {stats.map((item, index) => (
            <li key={index} className={styles.item} style={{ backgroundColor: colors[index] }}>
            <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

export default Statistics;
