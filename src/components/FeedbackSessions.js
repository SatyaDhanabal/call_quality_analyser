import React, { useState } from 'react';
import { MessageSquare, Star as LucideStar, AlertTriangle, Check, X, Ear, Heart, Puzzle, SlidersHorizontal, ChevronRight } from 'lucide-react';

const FeedbackSessions = ({ setCurrentPage }) => {
  const [selectedCall, setSelectedCall] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const calls = [
    {
      id: 'CALL001',
      user: 'John Doe',
      date: '2024-03-15',
      duration: '5:23',
      rating: 4.5,
      transcript: 'Hello, how can I help you today? This is a test call for demonstration purposes. The customer seems satisfied.',
      issues: ['Pacing too fast', 'Missed cross-sell opportunity'],
      strengths: ['Clear articulation', 'Good problem-solving'],
      sentiment: 'Positive'
    },
    {
      id: 'CALL002',
      user: 'Jane Smith',
      date: '2024-03-16',
      duration: '3:45',
      rating: 3.8,
      transcript: 'I am calling about my recent order. There was an issue with the delivery. I need to resolve this urgently. Please provide a solution.',
      issues: ['Lack of empathy', 'Did not offer alternative solution'],
      strengths: ['Listened actively'],
      sentiment: 'Neutral'
    },
    {
      id: 'CALL003',
      user: 'John Doe',
      date: '2024-03-17',
      duration: '7:12',
      rating: 4.8,
      transcript: 'Thank you for calling support. We are happy to assist you with your query. Is there anything else I can help you with?',
      issues: [],
      strengths: ['Excellent closing', 'Addressed all concerns'],
      sentiment: 'Very Positive'
    },
    {
      id: 'CALL004',
      user: 'Sarah Johnson',
      date: '2024-03-18',
      duration: '6:45',
      rating: 4.2,
      transcript: 'I need help with my account settings. The password reset is not working properly. Can you guide me through the process?',
      issues: ['Technical jargon used', 'Could have been more patient'],
      strengths: ['Resolved issue successfully', 'Good technical knowledge'],
      sentiment: 'Positive'
    },
    {
      id: 'CALL005',
      user: 'Michael Chen',
      date: '2024-03-19',
      duration: '4:30',
      rating: 3.5,
      transcript: 'My subscription was charged twice this month. I want a refund for the duplicate charge immediately.',
      issues: ['Did not apologize for inconvenience', 'Rushed through verification'],
      strengths: ['Quick resolution', 'Accurate information provided'],
      sentiment: 'Neutral'
    },
    {
      id: 'CALL006',
      user: 'Emily Davis',
      date: '2024-03-20',
      duration: '8:15',
      rating: 4.9,
      transcript: 'I wanted to thank your team for the excellent service. The previous agent helped me set up everything perfectly.',
      issues: [],
      strengths: ['Built great rapport', 'Captured feedback effectively', 'Offered additional services'],
      sentiment: 'Very Positive'
    },
    {
      id: 'CALL007',
      user: 'Robert Wilson',
      date: '2024-03-21',
      duration: '5:00',
      rating: 2.8,
      transcript: 'This is the third time I am calling about the same issue. Nobody seems to be able to help me properly.',
      issues: ['Failed to review previous tickets', 'Defensive tone', 'Did not escalate when needed'],
      strengths: ['Stayed calm under pressure'],
      sentiment: 'Negative'
    },
    {
      id: 'CALL008',
      user: 'Lisa Martinez',
      date: '2024-03-22',
      duration: '6:30',
      rating: 4.6,
      transcript: 'I need to upgrade my plan and also add family members to my account. Can you help me with the best options?',
      issues: ['Could have explained pricing more clearly'],
      strengths: ['Excellent product knowledge', 'Identified upsell opportunity', 'Patient explanation'],
      sentiment: 'Positive'
    },
    {
      id: 'CALL009',
      user: 'David Thompson',
      date: '2024-03-23',
      duration: '4:15',
      rating: 4.0,
      transcript: 'I received a notification about unusual activity on my account. Is everything secure?',
      issues: ['Initial response created more anxiety', 'Took time to access security protocols'],
      strengths: ['Thorough security check', 'Reassured customer effectively'],
      sentiment: 'Positive'
    }
  ];

  const feedbackCategories = [
    {
      id: 'communication',
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      title: 'Communication',
      score: 85,
      color: 'from-blue-500 to-blue-600',
      details: "Agent's clarity, tone, and overall conversational flow. Avoidance of jargon."
    },
    {
      id: 'listening',
      icon: <Ear className="w-6 h-6 text-purple-500" />,
      title: 'Active Listening',
      score: 92,
      color: 'from-purple-500 to-purple-600',
      details: "Agent's ability to understand customer's needs and respond appropriately. Minimal interruptions."
    },
    {
      id: 'empathy',
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: 'Empathy',
      score: 88,
      color: 'from-pink-500 to-pink-600',
      details: "Agent's ability to show understanding and compassion towards the customer's situation."
    },
    {
      id: 'problemSolving',
      icon: <Puzzle className="w-6 h-6 text-green-500" />,
      title: 'Problem Solving',
      score: 78,
      color: 'from-green-500 to-green-600',
      details: "Effectiveness in identifying and resolving customer issues."
    },
    {
      id: 'callControl',
      icon: <SlidersHorizontal className="w-6 h-6 text-orange-500" />,
      title: 'Call Control',
      score: 70,
      color: 'from-orange-500 to-orange-600',
      details: "Agent's ability to guide the conversation, manage time, and adhere to call flow protocols."
    }
  ];

  const handleCallClick = (call) => {
    setSelectedCall(call);
    setShowFeedbackModal(true);
    setExpandedCategory('');
  };

  const closeFeedbackModal = () => {
    setShowFeedbackModal(false);
    setSelectedCall(null);
    setExpandedCategory('');
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
            <button onClick={() => setCurrentPage('users')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              User Management
            </button>
            <button onClick={() => setCurrentPage('upload')} className="px-4 py-2 rounded-lg font-montserrat font-medium text-gray-600 hover:text-blue-600 hover:shadow-sm">
              Upload Audio
            </button>
            <button className="px-4 py-2 rounded-lg font-montserrat font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md">
              Feedback Sessions
            </button>
          </div>
          <button onClick={() => setCurrentPage('login')} className="text-gray-600 hover:text-red-600 font-montserrat font-medium mt-4 md:mt-0">
            Logout
          </button>
        </div>
      </nav>

      <div className="p-6">
        {/* Call List - Now takes full width */}
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
          <h2 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            Recent Calls
          </h2>
          
          {/* Grid layout for calls */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {calls.map((call) => (
              <div
                key={call.id}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 shadow-md group ${
                  selectedCall && selectedCall.id === call.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-xl transform scale-[1.02]'
                    : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg transform hover:scale-[1.005]'
                }`}
                onClick={() => handleCallClick(call)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg font-montserrat">
                    {call.id}
                  </h3>
                  <div className="flex items-center gap-1">
                    <LucideStar
                      className={`w-4 h-4 ${
                        selectedCall && selectedCall.id === call.id
                          ? 'text-yellow-200 fill-yellow-200'
                          : 'text-yellow-400 fill-yellow-400'
                      }`}
                    />
                    <span
                      className={`${
                        selectedCall && selectedCall.id === call.id
                          ? 'text-white'
                          : 'text-gray-700'
                      } font-open-sans`}
                    >
                      {call.rating.toFixed(1)}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                        selectedCall && selectedCall.id === call.id
                          ? 'text-white'
                          : 'text-gray-500 group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </div>
                <p
                  className={`text-sm font-semibold ${
                    selectedCall && selectedCall.id === call.id
                      ? 'text-blue-100'
                      : 'text-gray-800'
                  } font-open-sans`}
                >
                  {call.user}
                </p>
                <p
                  className={`text-sm ${
                    selectedCall && selectedCall.id === call.id
                      ? 'text-blue-100'
                      : 'text-gray-600'
                  } font-open-sans`}
                >
                  {call.date} | {call.duration}
                </p>
              </div>
            ))}
          </div>
          
          {/* Instruction message at the bottom */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 font-open-sans flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Select a call to view its detailed feedback and analysis
            </p>
          </div>
        </div>
      </div>

      {/* Feedback Modal - Remains the same */}
      {showFeedbackModal && selectedCall && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 animate-modal-pop-in relative">
            {/* Close Button */}
            <button
              onClick={closeFeedbackModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200 transform hover:scale-125"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header (Call Details) */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 pb-4 border-b border-gray-200 animate-fade-in-up">
              <div>
                <h2 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  Call Details: {selectedCall.id}
                </h2>
                <p className="text-gray-700 text-sm md:text-base font-open-sans">
                  User: <span className="font-medium">{selectedCall.user}</span> | Date:{' '}
                  <span className="font-medium">{selectedCall.date}</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base font-open-sans">
                  Duration: <span className="font-medium">{selectedCall.duration}</span> | Rating:{' '}
                  <span className="font-medium inline-flex items-center gap-1">
                    {selectedCall.rating.toFixed(1)}{' '}
                    <LucideStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  </span>
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold mt-4 md:mt-0 shadow-sm font-open-sans ${
                  selectedCall.sentiment === 'Positive'
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : selectedCall.sentiment === 'Very Positive'
                    ? 'bg-green-200 text-green-800 border border-green-300'
                    : selectedCall.sentiment === 'Neutral'
                    ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}
              >
                Sentiment: {selectedCall.sentiment}
              </span>
            </div>

            {/* Call Transcript */}
            <div className="mb-6 animate-fade-in-up animation-delay-100">
              <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 drop-shadow-sm">
                Transcript
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 h-40 overflow-y-auto border border-gray-200 shadow-inner">
                <p className="text-gray-700 leading-relaxed font-open-sans">
                  {selectedCall.transcript}
                </p>
              </div>
            </div>

            {/* Key Issues */}
            {selectedCall.issues && selectedCall.issues.length > 0 && (
              <div className="mb-6 animate-fade-in-up animation-delay-200">
                <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-3 flex items-center gap-2 drop-shadow-sm">
                  <AlertTriangle className="w-6 h-6 text-red-500" /> Key Issues
                </h3>
                <ul className="list-disc list-inside text-red-700 space-y-1 font-open-sans">
                  {selectedCall.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Strengths */}
            {selectedCall.strengths && selectedCall.strengths.length > 0 && (
              <div className="mb-6 animate-fade-in-up animation-delay-300">
                <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3 flex items-center gap-2 drop-shadow-sm">
                  <Check className="w-6 h-6 text-green-500" /> Strengths
                </h3>
                <ul className="list-disc list-inside text-green-700 space-y-1 font-open-sans">
                  {selectedCall.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Feedback Categories */}
            <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-4 drop-shadow-sm animate-fade-in-up animation-delay-400">
              Performance Categories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {feedbackCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-gray-50 rounded-xl p-4 cursor-pointer transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.005] group"
                  onClick={() =>
                    setExpandedCategory(expandedCategory === category.id ? '' : category.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                        {category.icon}
                      </span>
                      <h4 className="font-semibold text-gray-800 font-montserrat">
                        {category.title}
                      </h4>
                    </div>
                    <span
                      className={`text-lg font-montserrat font-bold drop-shadow-sm transition-transform duration-200 group-hover:scale-110 ${
                        category.score >= 90
                          ? 'text-green-600'
                          : category.score >= 80
                          ? 'text-blue-600'
                          : category.score >= 70
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {category.score}%
                    </span>
                  </div>
                  {expandedCategory === category.id && (
                    <p className="text-sm text-gray-600 mt-2 border-t border-gray-200 pt-2 font-open-sans">
                      {category.details}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Analysis */}
            <div className="mt-8 animate-fade-in-up animation-delay-500">
              <h3 className="text-xl font-montserrat font-bold bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent mb-4 drop-shadow-sm">
                Actionable Insights
              </h3>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 shadow-md">
                <p className="text-blue-800 font-open-sans">
                  Based on this call, the agent could improve by focusing on <strong>active listening</strong> and{' '}
                  <strong>empathy</strong> in their opening statements. Consider incorporating more
                  open-ended questions to fully grasp customer needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSessions;