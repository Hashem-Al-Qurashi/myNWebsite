
import { useState, useEffect } from 'react';
import { api } from '../api/auth';

function Protected() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProtectedContent = async () => {
      try {
        const response = await api.get('/api/protected-content');
        setMessage(response.data.message);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch protected content');
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedContent();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <h1>Protected Content</h1>
      <p>{message}</p>
    </div>
  );
}

export default Protected;
