import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, followers, views, likes, avatar }) => {
  return (
    <div className={styles.container}> 
    <div className={styles.profile1}>
      <div className={styles.description}>
        <img className={styles.avatar} src={avatar} alt="Profil"></img>
        <ul>
          <li className={styles.name}>{username}</li>
          <li className={styles.tag}>{tag}</li>
          <li className={styles.location}>{location}</li>
        </ul>
      </div>
      <div className={styles.statsSection}>
        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
