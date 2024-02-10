// src/components/UserCard.js

import React from "react";
import { IoMdMale, IoMdFemale } from "react-icons/io";

const UserCard = ({ user }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex bg-gray-800">
        <img
          className="w-80 border border-gray-700"
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div className="px-6 py-4 w-1/2">
          <div className="font-bold text-3xl text-blue-300 mb-2">
            {user.name.title} {user.name.first} {user.name.last}
          </div>
          <p className="text-gray-400 text-lg">
            {user.gender === "male" ? (
              <span className="flex items-center mb-2">
                <IoMdMale className="inline-block mr-2 text-blue-400" />
                <span className="text-blue-400 font-semibold">Male</span>
              </span>
            ) : (
              <span className="flex items-center mb-2">
                <IoMdFemale className="inline-block mr-2 text-pink-400" />
                <span className="text-pink-400 font-semibold">Female</span>
              </span>
            )}
            <br />
            <span className="text-gray-500 font-semibold">Age:</span>{" "}
            <span className="text-gray-300">{user.dob.age}</span>
            <br />
            <span className="text-gray-500 font-semibold">Location:</span>{" "}
            <span className="text-gray-300">
              {user.location.city}, {user.location.state},{" "}
              {user.location.country}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
