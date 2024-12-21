import React, { FC, useState } from 'react';
import { fetchUser, fetchRepos } from '../api/github';

interface HeaderProps {
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  setRepos: React.Dispatch<React.SetStateAction<any[]>>;
}

const Header: FC<HeaderProps> = ({ setUserData, setRepos }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value.trim();
    if (!username) return;

    try {
      const userData = await fetchUser(username);
      const userRepos = await fetchRepos(username);

      setUserData(userData);
      setRepos(userRepos);
      setErrorMessage(null); // Clear any previous errors
    } catch (error) {
      setUserData(null);
      setRepos([]);
      setErrorMessage('User not found'); // Set the error message if user is not found
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
          className="flex-1 p-2 rounded-l-lg border-none text-gray-700"
        />
        <button type="submit" className="bg-blue-800 px-4 py-2 rounded-r-lg">
          Search
        </button>
      </form>
      {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>} {/* Display error */}
    </header>
  );
};

export default Header;