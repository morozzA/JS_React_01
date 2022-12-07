import UserProfileApp from './components/Profile/ProfileApp';
import StatisticsApp from './components/Statistics/StatisticsApp';
import FriendListApp from './components/FriendList/FriendListApp';
import TransactionHistoryApp from 'components/TransactionHistory/TransactionHistoryApp';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <UserProfileApp />
      <StatisticsApp />
      <FriendListApp />
      <TransactionHistoryApp />
    </div>
  );
};
