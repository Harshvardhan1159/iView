import React from 'react';

const HRProfile = () => {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen bg-muted/40">
      <div className="max-w-3xl m-10 bg-card mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-32 h-32 rounded-lg bg-muted overflow-hidden">
            <img
              src="/companylogo.png" // Replace with actual path to company logo
              alt="Company Logo"
              width="128"
              height="128"
              className="object-cover w-full h-full"
              style={{ aspectRatio: '128 / 128', objectFit: 'cover' }}
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl text-primary font-bold">HR Manager</h1>
            <p className="text-muted">hr@example.com</p>
            <p className="text-muted">+1 (555) 987-6543</p>
          </div>
        </div>
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl text-primary font-bold">Company Information</h2>
              <button className="inline-flex text-primary bg-secondary items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent h-10 px-4 py-2">
                Update Profile
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="companyName"
                >
                  Company Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input px-3 bg-primary py-2 text-sm ring-offset-background file:border-0 file:bg-transparent text-primary file:text-sm file:font-medium placeholder:text-muted disabled:cursor-not-allowed disabled:opacity-50"
                  id="companyName"
                  readOnly
                  value="Company Name"
                />
              </div>
              <div>
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="hrName"
                >
                  HR Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-primary px-3 py-2 text-sm ring-offset-background text-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="hrName"
                  readOnly
                  value="HR Manager"
                />
              </div>
              <div>
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-primary px-3 py-2 text-sm ring-offset-background text-primary file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  readOnly
                  value="hr@example.com"
                />
              </div>
              <div>
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-primary text-primary px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="phone"
                  readOnly
                  value="+1 (555) 987-6543"
                />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl text-primary font-bold">Company Resume</h2>
            <div className="bg-muted rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-muted">
                <div className="flex items-center gap-2">
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
                    className="w-5 h-5 text-muted"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  </svg>
                  <span className="text-sm text-primary text-muted">CompanyResume.pdf</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-primary font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-secondary hover:bg-accent hover:text-accent h-10 px-4 py-2"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRProfile;
