import styles from './FriendsList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li
          key={friend.id}
          className={`friend-list-item ${
            friend.isOnline ? 'online' : 'offline'
          }`}
        >
          <img src={friend.avatar} alt={`Avatar for ${friend.name}`} />
          <div>
            <span>{friend.name}</span>
            <span
              className={friend.isOnline ? 'status-online' : 'status-offline'}
            >
              {friend.isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
