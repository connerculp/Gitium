import React, { FC } from 'react';
import axios from 'axios';

interface HeaderProps {
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  setRepos: React.Dispatch<React.SetStateAction<any[]>>;
}

const Header: FC<HeaderProps> = ({ setUserData, setRepos }) => {
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value.trim();
    if (!username) return;

    try {
      const [userRes, repoRes] = await Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos`),
      ]);

      setUserData(userRes.data);
      setRepos(repoRes.data);
    } catch (error) {
      console.error(error);
      setUserData(null);
      setRepos([]);
    }
  };

  return (
    <header className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg mb-4">
      <h1 className="text-2xl font-bold">GitHub Dashboard</h1>
      <form onSubmit={handleSearch} className="mt-4 flex">
  <input
    type="text"
    name="username"
    placeholder="Search GitHub username"
    className="flex-1 p-2 rounded-l-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button type="submit" className="bg-blue-800 px-4 py-2 text-white rounded-r-lg">
    Search
  </button>
</form>
    </header>
  );
};

export default Header;