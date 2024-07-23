// src/utils/firebaseUtils.js
import { auth } from './firebaseConfig';

export const sendOtp = async (phoneNumber, recaptchaVerifier) => {
  try {
    const confirmationResult = await auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
    return confirmationResult;
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
};

export const confirmOtp = async (confirmationResult, otp) => {
  try {
    const result = await confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error('Error confirming OTP:', error);
    throw error;
  }
};
