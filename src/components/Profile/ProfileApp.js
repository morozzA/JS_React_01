import UserProfile from './Profile';
import User from './user.json';

export default function UserProfileApp() {
  return (
    <UserProfile
      username={User.username}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats}
    />
  );
}
