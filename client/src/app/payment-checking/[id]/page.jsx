"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const verifyPayment = async (id) => {
  try {
    
    const response = await axios.post(`http://localhost:8000/payment/check`, { 
      id: id 
    });
   
    return response.data;
  } catch (error) {

    if (error.response?.status === 404) {
      throw new Error('User not found');
    } else if (error.response?.status === 400) {
      throw new Error('Gateway ID is missing');
    } else {
      throw new Error(error.response?.data?.message || 'An error occurred during verification');
    }
  }
};

const CustomLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#FFE6F0]">
    <div className="text-[#FFB5C7] text-4xl font-bold mb-8 text-center">
      Please wait for your payment verification
    </div>
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FFB5C7]"></div>
  </div>
);

const StatusModal = ({ status, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className={`text-xl font-bold mb-4 ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {status === 'success' ? 'Payment Verified' : 'Payment Verification Failed'}
        </h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className={`text-white px-4 py-2 rounded hover:opacity-90 ${
            status === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function PaymentChecker() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalStatus, setModalStatus] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();
  const params = useParams();
  
  // Get id from params
  const id = params?.id;
  console.log("URL Parameters:", params);
  console.log("Extracted id:", id);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      console.log("Starting payment verification for id:", id);
      
      if (!id) {
        console.log("No id found, showing error modal");
        setModalStatus('error');
        setModalMessage('User ID is missing. Please try again.');
        setShowModal(true);
        setIsLoading(false);
        return;
      }

      try {
        const response = await verifyPayment(id);
        console.log("Verification response:", response);

        if (response.success) {
          setModalStatus('success');
          setModalMessage('Payment confirmed successfully.');
        } else {
          setModalStatus('error');
          setModalMessage(response.message || 'Payment verification failed.');
        }
        setShowModal(true);
      } catch (error) {
        console.error("Payment verification error:", error);
        setModalStatus('error');
        setModalMessage(error.message || 'An error occurred during payment verification.');
        setShowModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    checkPaymentStatus();
  }, [id]);

  const handleCloseModal = () => {
    console.log("Modal closing, redirecting based on status:", modalStatus);
    setShowModal(false);
    if (modalStatus === 'success') {
      router.push("/login");
    } else {
      router.push("/register");
    }
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="min-h-screen bg-[#FFE6F0] flex items-center justify-center">
      {showModal && (
        <StatusModal
          status={modalStatus}
          message={modalMessage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

