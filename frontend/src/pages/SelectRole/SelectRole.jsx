import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectRole = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (selectedRole === 'user') {
      navigate('/user/signup');
    } else if (selectedRole === 'interviewer') {
      navigate('/hr/signup');
    }
  };

  const handleSignIn = () => {
    if (selectedRole === 'user') {
      navigate('/user/signin');
    } else if (selectedRole === 'interviewer') {
      navigate('/hr/signin');
    }
  };

  return (
    <div>
      <main className="flex flex-col items-center justify-center h-screen bg-background">
        <div className="container max-w-2xl px-4 py-12 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-center text-primary">Welcome to the iView Platform</h1>
            <p className="text-center text-accent">Please select your role to continue.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-card rounded-sm shadow-xl">
              <h2 className="text-2xl text-[#222222] font-bold text-card">User</h2>
              <p className="text-center text-muted">I am a candidate looking to participate in an interview.</p>
              <button
                onClick={() => setSelectedRole('user')}
                className={`inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary rounded-sm shadow-xl transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 ${
                  selectedRole === 'user' ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {selectedRole === 'user' ? 'Selected as User' : 'Continue as User'}
              </button>
            </div>
            <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-card rounded-sm shadow-xl">
              <h2 className="text-2xl text-[#222222] font-bold text-card">Interviewer</h2>
              <p className="text-center text-muted">I am an interviewer looking to conduct an interview.</p>
              <button
                onClick={() => setSelectedRole('interviewer')}
                className={`inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary rounded-sm shadow-xl transition-colors focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1 ${
                  selectedRole === 'interviewer' ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {selectedRole === 'interviewer' ? 'Selected as Interviewer' : 'Continue as Interviewer'}
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSignIn}
              className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary bg-primary rounded-sm shadow-xl transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Sign In
            </button>
            <button
              onClick={handleSignUp}
              className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-primary bg-primary rounded-sm shadow-xl transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelectRole;
