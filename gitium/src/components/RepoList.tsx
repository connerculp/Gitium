import { FC } from 'react';

interface RepoListProps {
  repos: any[];
}

const RepoList: FC<RepoListProps> = ({ repos }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 overflow-y-auto h-64">
      <h3 className="text-lg font-bold mb-4">Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} className="mb-2">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-gray-500 text-sm">{repo.description || 'No description'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;