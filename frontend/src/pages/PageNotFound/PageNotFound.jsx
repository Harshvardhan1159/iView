import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto h-12 w-12 text-primary"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
            <line x1="9" x2="9.01" y1="9" y2="9"></line>
            <line x1="15" x2="15.01" y1="9" y2="9"></line>
          </svg>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-muted">
            Oops, the page you are looking for does not exist. Please check the URL or go back to the homepage.
          </p>
          <div className="mt-6">
            <button
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={() => navigate('/')}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
