import React, { useState } from 'react';
import { Edit, Trash2, Check, X, Upload, ChevronDown, ChevronUp, Phone, Star, AlertTriangle, MessageSquare, Ear, Heart, Puzzle, SlidersHorizontal } from 'lucide-react';

const UserManagement = ({ setCurrentPage }) => {
  // Initial user data with call history only
  const initialUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      calls: [
        { id: 'CALL001', date: '2024-03-15', time: '09:30 AM', duration: '5:23', rating: 4.5, sentiment: 'Positive' },
        { id: 'CALL002', date: '2024-03-14', time: '02:15 PM', duration: '3:45', rating: 3.8, sentiment: 'Neutral' },
        { id: 'CALL003', date: '2024-03-13', time: '11:00 AM', duration: '7:12', rating: 4.8, sentiment: 'Very Positive' },
        { id: 'CALL004', date: '2024-03-12', time: '04:30 PM', duration: '6:30', rating: 4.2, sentiment: 'Positive' },
        { id: 'CALL005', date: '2024-03-11', time: '10:45 AM', duration: '4:15', rating: 3.5, sentiment: 'Neutral' },
        { id: 'CALL006', date: '2024-03-10', time: '01:20 PM', duration: '8:00', rating: 4.9, sentiment: 'Very Positive' },
        { id: 'CALL007', date: '2024-03-09', time: '03:10 PM', duration: '5:45', rating: 4.0, sentiment: 'Positive' },
        { id: 'CALL008', date: '2024-03-08', time: '09:00 AM', duration: '6:20', rating: 3.2, sentiment: 'Negative' },
        { id: 'CALL009', date: '2024-03-07', time: '02:30 PM', duration: '7:30', rating: 4.6, sentiment: 'Positive' },
        { id: 'CALL010', date: '2024-03-06', time: '11:15 AM', duration: '5:00', rating: 4.3, sentiment: 'Positive' }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      calls: [
        { id: 'CALL011', date: '2024-03-15', time: '10:00 AM', duration: '4:30', rating: 4.7, sentiment: 'Positive' },
        { id: 'CALL012', date: '2024-03-14', time: '03:45 PM', duration: '5:15', rating: 4.1, sentiment: 'Positive' },
        { id: 'CALL013', date: '2024-03-13', time: '11:30 AM', duration: '6:00', rating: 3.9, sentiment: 'Neutral' },
        { id: 'CALL014', date: '2024-03-12', time: '02:00 PM', duration: '4:45', rating: 4.5, sentiment: 'Positive' },
        { id: 'CALL015', date: '2024-03-11', time: '09:15 AM', duration: '7:20', rating: 4.8, sentiment: 'Very Positive' },
        { id: 'CALL016', date: '2024-03-10', time: '04:00 PM', duration: '5:30', rating: 3.6, sentiment: 'Neutral' },
        { id: 'CALL017', date: '2024-03-09', time: '10:30 AM', duration: '6:15', rating: 4.2, sentiment: 'Positive' },
        { id: 'CALL018', date: '2024-03-08', time: '01:45 PM', duration: '4:00', rating: 4.9, sentiment: 'Very Positive' },
        { id: 'CALL019', date: '2024-03-07', time: '03:30 PM', duration: '5:50', rating: 4.0, sentiment: 'Positive' },
        { id: 'CALL020', date: '2024-03-06', time: '09:45 AM', duration: '6:30', rating: 4.4, sentiment: 'Positive' }
      ]
    },
    {
      id: 3,
      name: 'Peter Jones',
      email: 'peter.jones@example.com',
      calls: [
        { id: 'CALL021', date: '2024-03-15', time: '08:30 AM', duration: '5:00', rating: 4.3, sentiment: 'Positive' },
        { id: 'CALL022', date: '2024-03-14', time: '12:15 PM', duration: '6:30', rating: 3.7, sentiment: 'Neutral' },
        { id: 'CALL023', date: '2024-03-13', time: '02:45 PM', duration: '4:15', rating: 4.6, sentiment: 'Positive' },
        { id: 'CALL024', date: '2024-03-12', time: '10:00 AM', duration: '7:00', rating: 4.1, sentiment: 'Positive' },
        { id: 'CALL025', date: '2024-03-11', time: '03:30 PM', duration: '5:45', rating: 3.8, sentiment: 'Neutral' },
        { id: 'CALL026', date: '2024-03-10', time: '11:00 AM', duration: '6:20', rating: 4.7, sentiment: 'Very Positive' },
        { id: 'CALL027', date: '2024-03-09', time: '09:15 AM', duration: '4:30', rating: 4.0, sentiment: 'Positive' },
        { id: 'CALL028', date: '2024-03-08', time: '02:00 PM', duration: '5:15', rating: 3.5, sentiment: 'Neutral' },
        { id: 'CALL029', date: '2024-03-07', time: '04:15 PM', duration: '6:00', rating: 4.5, sentiment: 'Positive' },
        { id: 'CALL030', date: '2024-03-06', time: '10:30 AM', duration: '7:30', rating: 4.2, sentiment: 'Positive' }
      ]
    }
  ];

  const [localUsers, setLocalUsers] = useState(initialUsers);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addMode, setAddMode] = useState('single');
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [expandedCalls, setExpandedCalls] = useState({});
  const [selectedCall, setSelectedCall] = useState(null);
  const [showCallModal, setShowCallModal] = useState(false);

  // Sample call details for the modal
  const getCallDetails = (callId) => ({
    transcript: 'Hello, how can I help you today? I understand you\'re having issues with your service. Let me look into that for you right away.',
    issues: ['Pacing too fast in opening', 'Missed opportunity to build rapport'],
    strengths: ['Clear problem identification', 'Efficient resolution'],
    categories: [
      { id: 'communication', title: 'Communication', score: 85, icon: <MessageSquare className="w-5 h-5 text-blue-500" /> },
      { id: 'listening', title: 'Active Listening', score: 92, icon: <Ear className="w-5 h-5 text-purple-500" /> },
      { id: 'empathy', title: 'Empathy', score: 88, icon: <Heart className="w-5 h-5 text-pink-500" /> },
      { id: 'problemSolving', title: 'Problem Solving', score: 78, icon: <Puzzle className="w-5 h-5 text-green-500" /> },
      { id: 'callControl', title: 'Call Control', score: 70, icon: <SlidersHorizontal className="w-5 h-5 text-orange-500" /> }
    ]
  });

  const handleAddUser = () => {
    const newUser = {
      id: Math.max(...localUsers.map(u => u.id), 0) + 1,
      name: 'New User',
      email: 'new.user@example.com',
      calls: []
    };
    setLocalUsers([...localUsers, newUser]);
    setShowAddModal(false);
  };

  const handleDeleteUser = (id) => {
    setLocalUsers(localUsers.filter(u => u.id !== id));
  };

  const handleEditUser = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleSaveEdit = () => {
    setLocalUsers(localUsers.map(u =>
      u.id === editingId ? { ...u, name: editName, email: editEmail } : u
    ));
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName('');
    setEditEmail('');
  };

  const toggleCalls = (userId) => {
    setExpandedCalls(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleCallClick = (call, user) => {
    setSelectedCall({ ...call, userName: user.name, callDetails: getCallDetails(call.id) });
    setShowCallModal(true);
  };

  const closeCallModal = () => {
    setShowCallModal(false);
    setSelectedCall(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-open-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg animate-fade-in-down">
        <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0 drop-shadow-sm">
            AI Call Analytics
          </h1>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => setCurrentPage('dashboard')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Dashboard
            </button>
            <button className="px-4 py-2 rounded-lg font-montserrat font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md">
              User Management
            </button>
            <button onClick={() => setCurrentPage('upload')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Upload Audio
            </button>
            <button onClick={() => setCurrentPage('feedback')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Feedback Sessions
            </button>
          </div>
          <button onClick={() => setCurrentPage('login')} className="text-gray-600 hover:text-red-600 font-montserrat font-medium mt-4 md:mt-0">
            Logout
          </button>
        </div>
      </nav>

      <div className="p-6 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.005] transition-transform duration-300">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent drop-shadow-sm">
              User Management
            </h2>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-montserrat font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              + Add User
            </button>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-montserrat font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-montserrat font-medium text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-montserrat font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-montserrat font-medium text-gray-700 uppercase tracking-wider">
                    Call History
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {localUsers.map(user => (
                  <React.Fragment key={user.id}>
                    <tr className="hover:bg-gray-50 transition-colors duration-200 transform hover:scale-[1.005]">
                      <td className="px-6 py-4 whitespace-nowrap font-open-sans">
                        {editingId === user.id ? (
                          <input
                            type="text"
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="text-sm text-gray-900">{user.name}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap font-open-sans">
                        {editingId === user.id ? (
                          <input
                            type="email"
                            value={editEmail}
                            onChange={(e) => setEditEmail(e.target.value)}
                            className="border border-gray-300 rounded-md p-1 focus:ring-blue-500 focus:border-blue-500"
                          />
                        ) : (
                          <div className="text-sm text-gray-900">{user.email}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        {editingId === user.id ? (
                          <>
                            <button
                              onClick={handleSaveEdit}
                              className="text-green-600 hover:text-green-900 mx-2 transform hover:scale-125 transition-transform duration-200"
                            >
                              <Check className="w-5 h-5 inline-block" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="text-red-600 hover:text-red-900 mx-2 transform hover:scale-125 transition-transform duration-200"
                            >
                              <X className="w-5 h-5 inline-block" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => handleEditUser(user)}
                              className="text-indigo-600 hover:text-indigo-900 mx-2 transform hover:scale-125 transition-transform duration-200"
                            >
                              <Edit className="w-5 h-5 inline-block" />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-red-600 hover:text-red-900 mx-2 transform hover:scale-125 transition-transform duration-200"
                            >
                              <Trash2 className="w-5 h-5 inline-block" />
                            </button>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button
                          onClick={() => toggleCalls(user.id)}
                          className="text-purple-600 hover:text-purple-800 transform hover:scale-125 transition-transform duration-200 flex items-center gap-1 mx-auto"
                          title={expandedCalls[user.id] ? "Collapse Call History" : "Expand Call History"}
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-xs font-semibold">{user.calls ? user.calls.length : 0}</span>
                          {expandedCalls[user.id] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>
                    
                    {/* Call History Row */}
                    {expandedCalls[user.id] && (
                      <tr className="bg-blue-50 animate-fade-in-down">
                        <td colSpan="4" className="px-6 py-4">
                          <div className="bg-white p-4 rounded-lg shadow-inner border border-blue-100">
                            <div className="flex items-center justify-between mb-3">
                              <p className="text-md font-montserrat font-semibold text-gray-700">Call History for {user.name}:</p>
                              <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                                <MessageSquare className="w-4 h-4" />
                                Click any call to view detailed feedback
                              </p>
                            </div>
                            <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Call ID</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Sentiment</th>
                                    <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase">Action</th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  {user.calls && user.calls.map(call => (
                                    <tr 
                                      key={call.id} 
                                      className="hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
                                      onClick={() => handleCallClick(call, user)}
                                    >
                                      <td className="px-4 py-2 text-sm text-blue-600 font-medium hover:text-blue-800 group-hover:underline">{call.id}</td>
                                      <td className="px-4 py-2 text-sm text-gray-900">{call.date}</td>
                                      <td className="px-4 py-2 text-sm text-gray-900">{call.time}</td>
                                      <td className="px-4 py-2 text-sm text-gray-900">{call.duration}</td>
                                      <td className="px-4 py-2 text-sm">
                                        <div className="flex items-center gap-1">
                                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                          <span className="text-gray-900">{call.rating}</span>
                                        </div>
                                      </td>
                                      <td className="px-4 py-2 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                          call.sentiment === 'Positive' ? 'bg-green-100 text-green-700' :
                                          call.sentiment === 'Very Positive' ? 'bg-green-200 text-green-800' :
                                          call.sentiment === 'Neutral' ? 'bg-yellow-100 text-yellow-700' :
                                          'bg-red-100 text-red-700'
                                        }`}>
                                          {call.sentiment}
                                        </span>
                                      </td>
                                      <td className="px-4 py-2 text-center">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1 mx-auto group-hover:scale-110 transition-transform">
                                          <MessageSquare className="w-4 h-4" />
                                          <span>View</span>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl transform scale-95 animate-modal-pop-in">
            <h3 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent mb-6 drop-shadow-sm">
              Add User
            </h3>
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setAddMode('single')}
                className={`flex-1 py-2 rounded-lg font-montserrat font-medium transition-all transform hover:scale-105 ${
                  addMode === 'single'
                    ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Single User
              </button>
              <button
                onClick={() => setAddMode('multiple')}
                className={`flex-1 py-2 rounded-lg font-montserrat font-medium transition-all transform hover:scale-105 ${
                  addMode === 'multiple'
                    ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Multiple Users
              </button>
            </div>
            {addMode === 'single' ? (
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50">
                <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4 opacity-70" />
                <p className="text-gray-700 mb-2 font-medium font-open-sans">
                  Drag & drop CSV file here
                </p>
                <p className="text-sm text-gray-500 font-open-sans">Format: name,email</p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-montserrat font-medium">
                  Or browse files
                </button>
              </div>
            )}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-montserrat font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg font-montserrat font-medium hover:shadow-lg"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call Details Modal */}
      {showCallModal && selectedCall && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 animate-modal-pop-in relative">
            {/* Close Button */}
            <button
              onClick={closeCallModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 transform hover:scale-125"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  Call Details: {selectedCall.id}
                </h2>
                <p className="text-gray-700 text-sm md:text-base font-open-sans">
                  User: <span className="font-medium">{selectedCall.userName}</span> | Date: <span className="font-medium">{selectedCall.date}</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base font-open-sans">
                  Time: <span className="font-medium">{selectedCall.time}</span> | Duration: <span className="font-medium">{selectedCall.duration}</span> | Rating: 
                  <span className="font-medium inline-flex items-center gap-1 ml-1">
                    {selectedCall.rating} <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </span>
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold mt-4 md:mt-0 shadow-sm font-open-sans ${
                selectedCall.sentiment === 'Positive' ? 'bg-green-100 text-green-700 border border-green-200' :
                selectedCall.sentiment === 'Very Positive' ? 'bg-green-200 text-green-800 border border-green-300' :
                selectedCall.sentiment === 'Neutral' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                'bg-red-100 text-red-700 border border-red-200'
              }`}>
                Sentiment: {selectedCall.sentiment}
              </span>
            </div>

            {/* Call Transcript */}
            <div className="mb-6">
              <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 drop-shadow-sm">
                Transcript
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto border border-gray-200 shadow-inner">
                <p className="text-gray-700 leading-relaxed font-open-sans">
                  {selectedCall.callDetails.transcript}
                </p>
              </div>
            </div>

            {/* Key Issues */}
            {selectedCall.callDetails.issues && selectedCall.callDetails.issues.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-3 flex items-center gap-2 drop-shadow-sm">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Key Issues
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-1 font-open-sans">
                  {selectedCall.callDetails.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Strengths */}
            {selectedCall.callDetails.strengths && selectedCall.callDetails.strengths.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3 flex items-center gap-2 drop-shadow-sm">
                  <Check className="w-6 h-6 text-green-500" /> Strengths
                </h3>
                <ul className="list-disc list-inside text-green-700 space-y-1 font-open-sans">
                  {selectedCall.callDetails.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Performance Categories */}
            <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 drop-shadow-sm">
              Performance Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedCall.callDetails.categories.map((category) => (
                <div key={category.id} className="bg-gray-50 rounded-xl p-4 shadow-md hover:shadow-lg transform hover:scale-[1.005] transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <h4 className="font-semibold text-gray-800 font-montserrat">{category.title}</h4>
                    </div>
                    <span className={`text-lg font-montserrat font-bold drop-shadow-sm ${
                      category.score >= 90 ? 'text-green-600' :
                      category.score >= 80 ? 'text-blue-600' :
                      category.score >= 70 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {category.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Actionable Insights */}
            <div className="mt-8">
              <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent mb-4 drop-shadow-sm">
                Actionable Insights
              </h3>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-md">
                <p className="text-blue-800 font-open-sans">
                  Based on this call, the agent could improve by focusing on <strong>building rapport</strong> in the opening and maintaining a <strong>steady pace</strong> throughout the conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;