import PropTypes from 'prop-types';
import {
  List,
  Profile,
  ProfileDescr,
  Avatar,
  Name,
  Tag,
  Location,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export default function UserProfile({
  username,
  tag,
  location,
  avatar,
  stats,
}) {
  return (
    <Profile>
      <ProfileDescr>
        <Avatar src={avatar} alt="User avatar" width="200" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDescr>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </Profile>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
