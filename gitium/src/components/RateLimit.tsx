import { useEffect, useState } from 'react';
import axios from 'axios';

const RateLimit = () => {
  const [rateLimit, setRateLimit] = useState<number | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const fetchRateLimit = async () => {
      try {
        const response = await axios.get('https://api.github.com/rate_limit');
        const { limit, remaining } = response.data.rate;
        setRateLimit(limit);
        setRemaining(remaining);
      } catch (error) {
        console.error('Error fetching rate limit:', error);
      }
    };

    fetchRateLimit();
  }, []);

  return (
    <div className="text-sm text-gray-600">
      {rateLimit !== null && remaining !== null ? (
        <p>
          API Rate Limit: {remaining}/{rateLimit} requests remaining
        </p>
      ) : (
        <p>Loading API rate limit...</p>
      )}
    </div>
  );
};

export default RateLimit;