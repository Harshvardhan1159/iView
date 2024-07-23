import React, { useState, useRef } from 'react';
import OTPBox from '../../../components/OTPBox/OTPBox';
import { signInWithPhoneNumber } from 'firebase/auth';

const UserSignup = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaRef = useRef(null);
  const [isOTPBoxOpen, setIsOTPBoxOpen] = useState(false);

  // Refs for form inputs
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const languageRef = useRef(null);
  const resumeRef = useRef(null);

  // Handle profile picture file change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePicture(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle verifyOTP
  const handleVerifyOTP = () => {
    setIsOTPBoxOpen(true);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
      language: languageRef.current.value,
      resume: resumeRef.current.files[0]?.name, // Get the name of the uploaded file
      profilePicture: profilePicturePreview ? 'Image uploaded' : 'No image uploaded'
    };

    // Print the form data
    console.log('Form Data:', formData);

    // You can also handle form submission here, such as sending data to the backend
  };

  return (
    <>
      {isOTPBoxOpen && (
        <OTPBox closeBox={() => setIsOTPBoxOpen(false)} />
      )}
      <div className='w-full min-h-[88vh] bg-background'>
        <div className="mx-auto max-w-[500px] space-y-6 py-12">
          <div className="space-y-2 text-center text-primary">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-muted">Fill out the form below to get started.</p>
          </div>
          <div className="rounded-lg border bg-card text-card shadow-sm">
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Profile Picture Preview and Input */}
              <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto">
                  {profilePicturePreview ? (
                    <img
                      src={profilePicturePreview}
                      alt="Profile Preview"
                      className="absolute inset-0 object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="first-name"
                    placeholder="John"
                    required
                    ref={firstNameRef}
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
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm  file:text-primary file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="last-name"
                    placeholder="Doe"
                    required
                    ref={lastNameRef}
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
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="example@email.com"
                  required
                  type="email"
                  ref={emailRef}
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
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="phone"
                  placeholder="+1 (555) 555-5555"
                  required
                  type="tel"
                  ref={phoneRef}
                />
              </div>
              <div className="items-center p-6 flex flex-col gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-primary font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent h-10 px-4 py-2"
                  type="button"
                  onClick={handleVerifyOTP}
                >
                  Verify OTP
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="password"
                    required
                    type="password"
                    ref={passwordRef}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="confirm-password"
                    required
                    type="password"
                    ref={confirmPasswordRef}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="language"
                >
                  Language Preference
                </label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="language"
                  required
                  ref={languageRef}
                >
                  <option value="">Select a language</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm text-primary font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="resume"
                >
                  Upload Resume
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  type="file"
                  ref={resumeRef}
                />
              </div>
              <div className="items-center p-6 flex flex-col gap-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm text-primary font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
