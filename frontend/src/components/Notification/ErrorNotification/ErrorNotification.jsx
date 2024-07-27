import React from 'react';

const ErrorNotification = ({ message }) => {
  return (
    <div className="fixed bottom-2 right-2">
      <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
        <div className="flex flex-row">
          <div className="px-2">
            <svg
              className="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div className="ml-2 mr-6">
            <span className="font-semibold">Error</span>
            <span className="block text-muted">{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorNotification;
