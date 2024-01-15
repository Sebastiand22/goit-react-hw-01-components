import Profile from './Profile/Profile';
import user from './user.json';
import Statistics from './Statistics/Statistics';
import data from './data.json';
import FriendsList from './FriendsList/FriendsList';
import friends from './friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

export const App = () => {
  
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title={'Upload stats'} stats={data} />
      <FriendsList friends={friends}> </FriendsList>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
