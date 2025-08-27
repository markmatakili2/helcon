import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCreditCard, FaCheckCircle, FaClock, FaExclamationTriangle, FaEye, FaMoneyBillWave } from 'react-icons/fa';

const PaymentDashboard = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.account.userData);
  const { appointments } = useSelector((state) => state.appointments);
  
  // Mock payment data - in real implementation, this would come from your backend
  const [payments, setPayments] = useState([
    {
      id: 1,
      appointmentId: 1,
      doctorName: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      amount: 150,
      status: "pending", // pending, released, disputed
      paymentDate: "2024-12-15",
      consultationDate: "2024-12-14",
      escrowReleaseDate: null,
      transactionHash: "0x1234...5678",
      reportReceived: false
    },
    {
      id: 2,
      appointmentId: 2,
      doctorName: "Dr. Michael Chen",
      specialty: "Dermatologist",
      amount: 100,
      status: "released",
      paymentDate: "2024-12-10",
      consultationDate: "2024-12-09",
      escrowReleaseDate: "2024-12-11",
      transactionHash: "0xabcd...efgh",
      reportReceived: true
    },
    {
      id: 3,
      appointmentId: 3,
      doctorName: "Dr. Amara Okafor",
      specialty: "Pediatrician",
      amount: 120,
      status: "pending",
      paymentDate: "2024-12-12",
      consultationDate: "2024-12-11",
      escrowReleaseDate: null,
      transactionHash: "0x9876...5432",
      reportReceived: true
    }
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleApprovePayment = (paymentId) => {
    setPayments(prev => prev.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'released', escrowReleaseDate: new Date().toISOString().split('T')[0] }
        : payment
    ));
  };

  const handleDisputePayment = (paymentId) => {
    setPayments(prev => prev.map(payment => 
      payment.id === paymentId 
        ? { ...payment, status: 'disputed' }
        : payment
    ));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <FaClock className="text-yellow-500" />;
      case 'released':
        return <FaCheckCircle className="text-green-500" />;
      case 'disputed':
        return <FaExclamationTriangle className="text-red-500" />;
      default:
        return <FaClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'released':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'disputed':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const totalPaid = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const pendingAmount = payments.filter(p => p.status === 'pending').reduce((sum, payment) => sum + payment.amount, 0);
  const releasedAmount = payments.filter(p => p.status === 'released').reduce((sum, payment) => sum + payment.amount, 0);

  const PaymentDetailModal = ({ payment, onClose }) => {
    if (!payment) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
            <h2 className="text-2xl font-bold text-gray-900">Payment Details</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Doctor Information</h3>
                <p className="text-gray-600">{payment.doctorName}</p>
                <p className="text-sm text-gray-500">{payment.specialty}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Payment Amount</h3>
                <p className="text-2xl font-bold text-blue-600">${payment.amount}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Status</h3>
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(payment.status)}`}>
                  {getStatusIcon(payment.status)}
                  <span className="capitalize font-medium">{payment.status}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Transaction Hash</h3>
                <p className="text-sm text-gray-600 font-mono">{payment.transactionHash}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-bold text-gray-900 mb-4">Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Payment made: {payment.paymentDate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Consultation completed: {payment.consultationDate}</span>
                </div>
                {payment.escrowReleaseDate && (
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Payment released: {payment.escrowReleaseDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Dashboard</h1>
          <p className="text-gray-600">Manage your healthcare payments and escrow transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Paid</p>
                <p className="text-3xl font-bold text-gray-900">${totalPaid}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FaMoneyBillWave className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending Release</p>
                <p className="text-3xl font-bold text-yellow-600">${pendingAmount}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <FaClock className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Released</p>
                <p className="text-3xl font-bold text-green-600">${releasedAmount}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Payment History</h2>
            <p className="text-gray-600 mt-1">Track all your healthcare payments and escrow status</p>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              {payments.map((payment) => (
                <div key={payment.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{payment.doctorName}</h3>
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(payment.status)}`}>
                          {getStatusIcon(payment.status)}
                          <span className="capitalize font-medium">{payment.status}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-1">{payment.specialty}</p>
                      <p className="text-sm text-gray-500">Consultation: {payment.consultationDate}</p>
                      <p className="text-sm text-gray-500">Payment: {payment.paymentDate}</p>
                    </div>

                    <div className="flex flex-col md:items-end space-y-2">
                      <p className="text-2xl font-bold text-gray-900">${payment.amount}</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedPayment(payment);
                            setShowModal(true);
                          }}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <FaEye />
                          <span>View Details</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {payment.status === 'pending' && payment.reportReceived && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-blue-900">Report received from {payment.doctorName}</p>
                          <p className="text-sm text-blue-700">You can now approve the payment release</p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApprovePayment(payment.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                          >
                            <FaCheckCircle />
                            <span>Approve Release</span>
                          </button>
                          <button
                            onClick={() => handleDisputePayment(payment.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
                          >
                            <FaExclamationTriangle />
                            <span>Dispute</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {payment.status === 'pending' && !payment.reportReceived && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                      <p className="text-yellow-800">
                        <FaClock className="inline mr-2" />
                        Waiting for consultation report from {payment.doctorName}
                      </p>
                    </div>
                  )}

                  {payment.status === 'released' && (
                    <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-green-800">
                        <FaCheckCircle className="inline mr-2" />
                        Payment successfully released on {payment.escrowReleaseDate}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {payments.length === 0 && (
                <div className="text-center py-12">
                  <FaCreditCard className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No payments yet</h3>
                  <p className="text-gray-600">Your payment history will appear here after your first consultation</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* How Escrow Works */}
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Our Escrow System Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Payment Made</h3>
              <p className="text-gray-600 text-sm">Your payment is securely held in escrow when you book a consultation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">You receive your consultation and medical report from the specialist</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Approval</h3>
              <p className="text-gray-600 text-sm">You approve the payment release after confirming service delivery</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Release</h3>
              <p className="text-gray-600 text-sm">Payment is automatically released to the healthcare provider</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Detail Modal */}
      {showModal && (
        <PaymentDetailModal 
          payment={selectedPayment} 
          onClose={() => {
            setShowModal(false);
            setSelectedPayment(null);
          }} 
        />
      )}
    </div>
  );
};

export default PaymentDashboard;