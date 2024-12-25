import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Globe, User, Cake, Smile } from 'lucide-react';

const UserProfileCard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUserData(data.results[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-4xl flex items-center">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <img
            src={userData.picture.large}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="ml-8 w-full">
          {/* Name and Gender Details */}
          <h2 className="text-3xl font-bold text-gray-800 ml-32">Profile Card</h2>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Left Details */}
            <div className="space-y-4">
              <p className="flex items-center space-x-3 text-gray-700">
                <User className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">First Name:</span> {userData.name.first}
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <User className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Last Name:</span> {userData.name.last}
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <Smile className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Age:</span> {userData.dob.age}
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <User className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Gender:</span> {userData.gender}
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <Cake className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Date of Birth:</span>{' '}
                {new Date(userData.dob.date).toLocaleDateString()}
              </p>
            </div>

            {/* Right Details */}
            <div className="space-y-6">
              <p className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>{userData.email}</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>{userData.phone}</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{`${userData.location.city}, ${userData.location.state}, ${userData.location.country}`}</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>Nationality: {userData.nat}</span>
              </p>
              <p className="flex items-center space-x-3 text-gray-700">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span>Joined: {new Date(userData.registered.date).toLocaleDateString()}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
