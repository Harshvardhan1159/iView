import React from 'react';

const Card = ({ imgSrc, hrCompanyLogo, hrName, position, date, time, resumePDF, status, userEmail, userImage }) => {
  return (
    <div className="flex flex-col justify-center m-5">
      <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/5 bg-white grid place-items-center">
          <img src={imgSrc || hrCompanyLogo || userImage} alt={hrName || "HR Company Logo"} className="rounded-sm shadow-md" />
        </div>
        <div className="w-full md:w-2/8 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-medium hidden md:block">{userEmail}</p>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">{status}</div>
          </div>
          <h3 className="font-black text-gray-800 md:text-3xl text-xl">{hrName}</h3>
          <p className="md:text-sm text-gray-500 text-base">{position}</p>
          <p className="md:text-sm text-gray-500 text-base">{date}</p>
          <p className="md:text-sm text-gray-500 text-base">{time}</p>
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">View Resume</a>
            </div>
            <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
