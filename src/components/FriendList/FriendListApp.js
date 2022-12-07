import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import friends from './friends.json';
import { FriendList, Item, StatusOff, StatusOn } from './FriendListApp.styled';

export default function FriendListApp() {
  return (
    <FriendList>
      {friends.map(friend => (
        <Item key={friend.id}>
          {friend.isOnline ? <StatusOn /> : <StatusOff />}
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </Item>
      ))}
    </FriendList>
  );
}

FriendListApp.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
