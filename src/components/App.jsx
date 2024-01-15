import Profile from './Profile/Profile';
import user from './user.json';
import Statistics from './Statistics/Statistics';
import data from './data.json';
import FriendsList from './FriendsList/FriendsList';
import friends from './friends.json';
import FriendsListItem from './FriendsList/FriendsListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  const userData = {
    username: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <Statistics title={'Upload stats'} stats={data} />
     <FriendsList friends={friends}> </FriendsList>
     <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
