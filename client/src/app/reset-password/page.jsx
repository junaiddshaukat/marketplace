'use client';

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const tempUser = useSelector((state) => state.auth.tempuser);

  const [isLoading, setIsLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [formData, setFormData] = useState({
    otp: ['', '', '', ''],
    newPassword: "",
    confirmPassword: "",
  });
  const [resendTimer, setResendTimer] = useState(60);
  const [showResendButton, setShowResendButton] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    if (!tempUser || !token) {
      router.push("/forget-password");
    }

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev === 1) {
          setShowResendButton(true);
          clearInterval(timer);
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [tempUser, token, router]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData(prev => ({ ...prev, otp: newOtp }));
      
      if (value && index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/checkResetPasswordOtp`, {
        activation_token: token,
        activation_code: formData.otp.join(''),
      });
      setOtpVerified(true);
      toast.success("OTP verified successfully");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Invalid OTP";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/resetPassword`, {
        activation_token: token,
        newpassword: formData.newPassword,
      });
      toast.success("Password reset successfully");
      router.push("/login");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to reset password";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/forgetpassword`, {
        name: tempUser.name,
        email: tempUser.email,
      });
      toast.success(response.data.message);
      dispatch({
        type: 'auth/userRegistration',
        payload: {
          token: response.data.activationToken,
        },
      });
      setResendTimer(60);
      setShowResendButton(false);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Failed to resend OTP";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to login
          </Link>
          
          <div className="mt-6 flex justify-center">
            <div className="relative h-20 w-20 rounded-full bg-[#FFE6F0] p-5">
              <Mail className="h-10 w-10 text-[#ffa7b3]" />
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            {otpVerified ? "Reset Password" : "Check your email"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {otpVerified
              ? "Enter your new password"
              : `We've sent a 4-digit verification code to ${tempUser?.email}`}
          </p>
        </div>

        <form onSubmit={otpVerified ? handleResetPassword : handleVerifyOtp} className="mt-8 space-y-6">
          {!otpVerified && (
            <div>
              <div className="flex justify-center gap-3">
                {formData.otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className="h-16 w-16 rounded-xl border-2 bg-white text-center text-2xl font-semibold 
                      border-gray-200 focus:border-[#ffa7b3] focus:outline-none focus:ring-2 focus:ring-[#ffa7b3] focus:ring-opacity-50"
                    required
                  />
                ))}
              </div>
              {showResendButton ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="mt-4 text-sm text-[#ffa7b3] hover:text-[#ff9fb8]"
                >
                  Resend code
                </button>
              ) : (
                <p className="mt-4 text-sm text-gray-500">
                  Resend code in {resendTimer}s
                </p>
              )}
            </div>
          )}
          {otpVerified && (
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  required
                  value={formData.newPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handlePasswordChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#ffa7b3] focus:outline-none focus:ring-1 focus:ring-[#ffa7b3]"
                />
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md bg-[#ffa7b3] px-4 py-2 text-sm font-semibold text-white hover:bg-[#ff9fb8] focus:outline-none focus:ring-2 focus:ring-[#ffa7b3] focus:ring-offset-2 disabled:opacity-50"
          >
            {isLoading
              ? "Processing..."
              : otpVerified
              ? "Reset Password"
              : "Verify Email"}
          </button>
        </form>
      </div>
    </div>
  );
}

