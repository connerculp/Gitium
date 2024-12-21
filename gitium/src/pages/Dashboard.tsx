import { useState } from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import RepoList from '../components/RepoList';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);  // Stores GitHub user data
  const [repos, setRepos] = useState<any[]>([]);        // Stores repositories

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <Header setUserData={setUserData} setRepos={setRepos} />
      {userData && <UserProfile user={userData} />}
      {repos.length > 0 && <RepoList repos={repos} />}
      <Footer />
    </div>
  );
};

export default Dashboard;