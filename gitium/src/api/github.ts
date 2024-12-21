import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Accept: 'application/vnd.github.v3+json' },
});

export const fetchUser = (username: string) => api.get(`/users/${username}`);

export const fetchRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data; // Only return the array of repos
  } catch (error) {
    console.error('Error fetching user repositories:', error);
    throw error;
  }
};

export const fetchRateLimit = () => api.get('/rate_limit');