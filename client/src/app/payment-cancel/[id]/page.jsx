"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const cancelPayment = async (id) => {
  console.log("cancelPayment function called with id:", id);

  try {
    // Changed to match backend expectation - sending id in request body
    const response = await axios.delete(`http://localhost:8000/payment/cancel`, {
      data: { id: id } // Axios delete with body data
    });
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in cancelPayment function:", error);
    throw error;
  }
};

const CustomLoader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-[#FFE6F0]">
    <div className="text-[#FFB5C7] text-4xl font-bold mb-8 text-center">
      Cancelling your payment...
    </div>
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#FFB5C7]"></div>
  </div>
);

const StatusModal = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold mb-4 text-[#FFB5C7]">Payment Cancelled</h3>
        <p className="text-gray-600 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#FFB5C7] text-white px-4 py-2 rounded hover:bg-[#ff9fb8]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function PaymentCancellation() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const router = useRouter();
  const params = useParams();

  const id = params?.id;


  useEffect(() => {
    const processCancellation = async () => {
   

      if (!id) {
        console.log("No id found, showing error modal");
        setModalMessage('ID is missing. Redirecting to registration page...');
        setShowModal(true);
        setIsLoading(false);
        return;
      }

      try {
        console.log("Attempting to cancel payment for id:", id);
        const response = await cancelPayment(id);
        console.log("Cancel payment response:", response);

        if (response.success) {
          setModalMessage(response.message || 'Your payment has been  cancelled. Redirecting to registration page...');
        } else {
          setModalMessage(response.message || 'Failed to cancel payment. Redirecting to registration page...');
        }
        setShowModal(true);
      } catch (error) {
        console.error("Payment cancellation error:", error);
        setModalMessage(
          error.response?.data?.message || 
          'An error occurred during payment cancellation. Redirecting to registration page...'
        );
        setShowModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    processCancellation();
  }, [id]);

  const handleCloseModal = () => {
    console.log("Modal closing, redirecting to register page");
    setShowModal(false);
    router.push("/register");
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="min-h-screen bg-[#FFE6F0] flex items-center justify-center">
      {showModal && (
        <StatusModal
          message={modalMessage}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

