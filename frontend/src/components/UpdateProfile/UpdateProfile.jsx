import React, { useState, useRef, useEffect } from 'react';
import { updateUser, getUser } from '../../api/users/userAPI';
import ErrorNotification from '../../components/Notification/ErrorNotification/ErrorNotification';
import SuccessNotification from '../../components/Notification/SuccessNotification/SuccessNotification';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('First Name');
  const [lastName,setLastName] = useState('Last Name');
  const [username,setUsername]= useState("");
  const [email,setEmail] = useState('');
  const[phoneNumber,setPhoneNumber]=useState('');
  const[resumePDF,setResumePDF]=useState("");
  const [languagePreference,setLanguagePreference] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);


  const [error,setError]=useState("");
  const [notification,setNotification]=useState("");


  const fetchUserData = async () => {
    try {
      const response = await getUser();
      const user = response.data;
      setUsername(user.username);
      setEmail(user.email);
      setPhoneNumber(user.phoneNumber);
      setResumePDF(user.resumePDF);
      setProfilePicture(user.profilePicture);
      setLanguagePreference(user.languagePreference);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError(error);
      setTimeout(()=>{
          navigate("/user/signin");   
      },2000);
    }
  };
  fetchUserData();

  const updateUserData = async(e)=>{
    e.preventDefault();
    const userData ={
      username,
      email,
      profilePicture,
      phoneNumber,
      resumePDF,
      languagePreference
    }
    console.log(userData);
    try {
       const response = await updateUser(userData);
       console.log(response);
       setNotification("User Updated Successfully");
       setTimeout(()=>{
        setNotification(""); 
       },3000)
    } catch (error) {
      setError(error.data)
      console.log(error);
      
    }
  }

    // Handle profile picture file change
    const handleProfilePictureChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setProfilePicture(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfilePicture(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };


  return (
    <>
      {error && <ErrorNotification message={error} />}
      {notification && <SuccessNotification message={notification} />}

      <div className='w-full min-h-[88vh] bg-background'>
        <div className="mx-auto max-w-[800px] space-y-6 py-12">
          <div className="space-y-2 text-center text-primary">
            <h1 className="text-3xl font-bold">Update Profile</h1>
            <p className="text-muted">Update your profile information below.</p>
          </div>
          <div className="rounded-sm border text-card shadow-sm">
            <form onSubmit={updateUserData} className="p-6 space-y-4">
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt="Profile Preview"
                      className="absolute inset-0 object-cover w-full h-full rounded-sm"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-sm">
                      <span className="text-sm text-muted">No Image</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="profile-picture"
                  >
                    Upload Image
                  </label>
                  <input
                    className="flex h-10 w-full bg-gray-100 rounded-sm border border-input px-3 py-2 text-sm text-muted ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="profile-picture"
                    accept=".jpg,.jpeg,.png"
                    type="file"
                    onChange={handleProfilePictureChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-sm border border-input px-3 py-2 text-sm text-[#222222] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="first-name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-sm border border-input px-3 py-2 text-sm text-[#222222] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="last-name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="flex h-10 w-full rounded-sm border border-input px-3 py-2 text-sm text-[#222222] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  className="flex h-10 w-full rounded-sm border border-input px-3 py-2 text-sm text-[#222222] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="languagePreference"
                >
                  Language Preference
                </label>
                <select
                  className="flex h-10 w-full rounded-sm border border-input bg-[#ffffff] px-3 py-2 text-sm text-myted ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="languagePreference"
                  value={languagePreference}
                  onChange={(e) => setLanguagePreference(e.target.value)}
                >
                  <option value="">Select a language</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="resume"
                >
                  Upload Resume (PDF)
                </label>
                <input
                  className="flex h-10 w-full bg-[#ffffff] rounded-sm border border-input px-3 py-2 text-sm text-muted ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="resume"
                  accept=".pdf"
                  type="file"
                  onChange={()=>{setResumePDF(e.target.value)}}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
