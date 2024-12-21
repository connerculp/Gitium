import { FC } from 'react';

interface UserProfileProps {
  user: any;
}

const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mb-4">
      <div className="flex items-center">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-20 h-20 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || user.login}</h2>
          <p className="text-gray-500">@{user.login}</p>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;