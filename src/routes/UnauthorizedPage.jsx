import React, { useEffect } from 'react';
import './unauthpage.css';
import { useNavigate } from 'react-router-dom';

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Use navigate to navigate back to the previous location
      navigate('/');
    }, 4000);

    // Clear the timeout if the component is unmounted before the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="heading">Unauthorized Access</h1>
          <p className="message">
            You do not have permission to access this page. Please contact your supervisor or system administrator for assistance.
          </p>
        </div>
      </div>
    </>
  );
};
