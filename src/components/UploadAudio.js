import React, { useState } from 'react';
import { FileAudio, Play, Pause } from 'lucide-react';

// Added a default empty array for 'users' prop to prevent 'map' errors
const UploadAudio = ({ setCurrentPage, users = [] }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [uploadedFile, setUploadedFile] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (files) => {
    if (files.length > 0 && selectedUser) {
      setUploadedFile(files[0].name);
    }
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
            <button className="px-4 py-2 rounded-lg font-montserrat font-medium bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 shadow-md">
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
        {/* Guidelines */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-6 text-white mb-6 shadow-xl transform hover:scale-[1.005] transition-transform duration-300 animate-card-pop">
          <h3 className="text-xl font-montserrat font-bold text-blue-50 mb-4 drop-shadow-sm">
            Audio Upload Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold mb-1 font-open-sans">Preferred formats:</p>
              <p className="text-blue-100 opacity-90 font-open-sans">MP3, WAV, M4A, OGG</p>
            </div>
            <div>
              <p className="font-semibold mb-1 font-open-sans">Maximum file size:</p>
              <p className="text-blue-100 opacity-90 font-open-sans">100MB</p>
            </div>
            <div>
              <p className="font-semibold mb-1 font-open-sans">Audio quality:</p>
              <p className="text-blue-100 opacity-90 font-open-sans">Minimum 128kbps bitrate</p>
            </div>
            {/* Added instruction for selecting user */}
            <div>
              <p className="font-semibold mb-1 font-open-sans">User Assignment:</p>
              <p className="text-blue-100 opacity-90 font-open-sans">Select the relevant user before uploading audio.</p>
            </div>
          </div>
          <p className="mt-4 text-blue-100 text-sm opacity-90 font-open-sans">
            Note: Ensure clear audio without excessive background noise
          </p>
        </div>

        {/* User Selection */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 transform hover:scale-[1.005] transition-transform duration-300 animate-fade-in-up animation-delay-100">
          <label className="block text-lg font-montserrat font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 drop-shadow-sm">
            Select User for Audio Upload
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 bg-white shadow-sm focus:shadow-md transition-all duration-200 font-open-sans"
          >
            <option value="">Choose a user...</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.005] transition-transform duration-300 animate-fade-in-up animation-delay-200">
          <div
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 shadow-inner group ${
              isDragging ? 'border-blue-500 bg-blue-50 shadow-lg' : 'border-gray-300 bg-gray-50'
            } ${!selectedUser ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-400 hover:bg-blue-50'}`}
            onDragOver={(e) => {
              e.preventDefault();
              if (selectedUser) setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              if (selectedUser) {
                handleFileUpload(e.dataTransfer.files);
              }
            }}
          >
            <FileAudio className="w-16 h-16 text-gray-500 mx-auto mb-4 opacity-70 transform transition-transform duration-200 group-hover:scale-110" />
            <h3 className="text-xl font-montserrat font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2 drop-shadow-sm">
              {selectedUser ? 'Drop your audio file here' : 'Please select a user to upload audio'}
            </h3> {/* Rephrased text */}
            <p className="text-gray-600 mb-4 font-open-sans font-medium">or</p>
            <input
              type="file"
              id="audio-upload-input"
              className="hidden"
              accept="audio/*"
              disabled={!selectedUser}
              onChange={(e) => handleFileUpload(e.target.files)}
            />
            <label
              htmlFor="audio-upload-input"
              className={`px-6 py-2 rounded-lg font-montserrat font-medium transition-all inline-block ${
                selectedUser
                  ? 'bg-gradient-to-r from-blue-600 to-purple-700 text-white hover:shadow-lg cursor-pointer transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Browse Files
            </label>
          </div>

          {/* Audio Player (if file uploaded) */}
          {uploadedFile && (
            <div className="mt-6 bg-white rounded-xl shadow-md p-4 transform hover:scale-[1.005] transition-transform duration-300 animate-fade-in-up animation-delay-300">
              <div className="bg-gray-100 rounded-xl p-4 shadow-inner">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-800 font-open-sans">{uploadedFile}</h4>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-full hover:bg-blue-600 shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                </div>
                <div className="bg-gray-300 rounded-full h-2 shadow-inner">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1 font-open-sans">
                  <span>1:23</span>
                  <span>4:56</span>
                </div>
              </div>

              {/* Transcript */}
              <div className="mt-6">
                <h4 className="font-semibold font-montserrat bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-3 drop-shadow-sm">
                  Transcript
                </h4>
                <div className="bg-gray-50 rounded-lg p-4 h-32 overflow-y-auto border border-gray-200 shadow-inner">
                  <p className="text-gray-700 leading-relaxed font-open-sans">
                    This is a sample transcript of the uploaded audio file. The actual transcript would appear here after processing.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadAudio;