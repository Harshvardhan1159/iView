import React, { useState } from 'react'
import { fetchHR } from '../../../api/HR/HRAPI'
import CardList from '../../../components/HRInterviewList/List';
import ErrorNotification from '../../../components/Notification/ErrorNotification/ErrorNotification';



const HRDashboard = () => {
  const [error,setError] =useState("");
  const [name,setName]=useState(" ");
  const [email,setEmail]=useState(" ");
  const[phonenumber,setPhoneNumber]=useState(" ");
  const [avatar,setAvatar]=useState(" ");


  const fetcHRData = async()=>{
      try {
        const response = await fetchHR();
        const hr = response.hrManager;
        setName(hr.name);
        setEmail(hr.email);
        setPhoneNumber(hr.phoneNumber);
        setAvatar(response.profilePicture);
      } catch (error) {
        console.error(error.message);
        setError("Token is not valid")
      }
  }

  const data = [
    {
      imgSrc: "https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hrCompanyLogo: "https://example.com/company-logo.png",
      hrName: "John Doe",
      position: "Software Engineer",
      date: "2024-08-03",
      time: "10:00 AM",
      resumePDF: "https://example.com/resume.pdf",
      status: "Pending",
      userEmail: "user1@example.com",
      userImage: "https://example.com/user-image1.png"
    },
    {
      imgSrc: "https://images.pexels.com/photos/1231231/pexels-photo-1231231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hrCompanyLogo: "https://example.com/company-logo2.png",
      hrName: "Jane Smith",
      position: "Data Analyst",
      date: "2024-08-04",
      time: "11:00 AM",
      resumePDF: "https://example.com/resume2.pdf",
      status: "Scheduled",
      userEmail: "user2@example.com",
      userImage: "https://example.com/user-image2.png"
    },
    {
      imgSrc: "https://images.pexels.com/photos/4564564/pexels-photo-4564564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hrCompanyLogo: "https://example.com/company-logo3.png",
      hrName: "Michael Johnson",
      position: "Product Manager",
      date: "2024-08-05",
      time: "2:00 PM",
      resumePDF: "https://example.com/resume3.pdf",
      status: "Completed",
      userEmail: "user3@example.com",
      userImage: "https://example.com/user-image3.png"
    },
    {
      imgSrc: "https://images.pexels.com/photos/7897897/pexels-photo-7897897.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      hrCompanyLogo: "https://example.com/company-logo4.png",
      hrName: "Emily Davis",
      position: "UX Designer",
      date: "2024-08-06",
      time: "3:00 PM",
      resumePDF: "https://example.com/resume4.pdf",
      status: "Pending",
      userEmail: "user4@example.com",
      userImage: "https://example.com/user-image4.png"
    }
  ];



  fetcHRData();
  return (
    <>
    {error && <ErrorNotification message={error}/>}
    <div className="w-full flex flex-col bg-background sm:flex-row flex-grow overflow-hidden">
      <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
      <div className="sticky top-0 p-4 bg-secondary  rounded-xl w-full">
          {/*  */}
          <div className="flex flex-col max-w-md p-6 dark:bg-gray-50 min-h-[50vh] dark:text-gray-800">
            <img src={`${avatar}`} alt="" className="w-full rounded-sm shadow-xl" />
            <div>
              <h2 className="text-xl text-center font-semibold">{name}</h2>
              <span className="block pb-2 text-sm text-center dark:text-gray-600">{email}</span>
              <p className='text-center'>{phonenumber}</p>
            </div>
            <div class="w-full mt-5">
              <div class="flex-1 h-full w-full mx-auto">
                <div class="flex w-full bg-primary shadow rounded-lg px-10 py-3">
                  <p class="m-auto inset-0 font-semibold leading-7 text-center text-gray-800">View</p>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      
    </div>
      {/* <MainContent /> */}
      <main role="main" className="w-full h-full max-h-[100vh] flex-grow p-3 overflow-scroll">
      <h1 className="text-3xl text-primary md:text-5xl mb-4 font-extrabold" id="home">Interviews</h1>
      <CardList data={data} />
    </main>
    </div>
    </>
  );
}




export default HRDashboard
