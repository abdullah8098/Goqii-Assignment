import React, { useState, useEffect } from 'react';
import CommonLayout from './CommonLayout';

const HomePage = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.length);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <CommonLayout>
      <h2>Welcome to the Dashboard</h2>
      <div className="card mt-4" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">Total Users</h5>
          <p className="card-text">{userCount}</p>
        </div>
      </div>
    </CommonLayout>
  );
};

export default HomePage;
