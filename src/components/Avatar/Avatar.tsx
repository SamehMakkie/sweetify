import React from "react";

interface IProps {
  username: string;
}

const getColorFromLetter = (letter: string) => {
  switch (letter.toLowerCase()) {
    case 'a':
      return 'bg-red-600';
    case 'b':
      return 'bg-blue-600';
    case 'c':
      return 'bg-green-600';
    case 'd':
      return 'bg-yellow-600';
    case 'e':
      return 'bg-purple-600';
    case 'f':
      return 'bg-indigo-600';
    case 'g':
      return 'bg-pink-600';
    case 'h':
      return 'bg-orange-600';
    case 'i':
      return 'bg-teal-600';
    case 'j':
      return 'bg-cyan-600';
    case 'k':
      return 'bg-gray-600';
    case 'l':
      return 'bg-red-500';
    case 'm':
      return 'bg-blue-500';
    case 'n':
      return 'bg-green-500';
    case 'o':
      return 'bg-yellow-500';
    case 'p':
      return 'bg-purple-500';
    case 'q':
      return 'bg-indigo-500';
    case 'r':
      return 'bg-pink-500';
    case 's':
      return 'bg-orange-500';
    case 't':
      return 'bg-teal-500';
    case 'u':
      return 'bg-cyan-500';
    case 'v':
      return 'bg-gray-500';
    case 'w':
      return 'bg-red-400';
    case 'x':
      return 'bg-blue-400';
    case 'y':
      return 'bg-green-400';
    case 'z':
      return 'bg-yellow-400';
    default:
      return 'bg-gray-400';
  }
}

const Avatar: React.FC<IProps> = ({ username }) => {
  // split the string on every space
  const splitUsername = username.split(" ");
  // get first and last name
  const firstName = splitUsername[0];
  const lastName = splitUsername.length > 1 ? splitUsername[1] : "";
  // get first character from first name
  const firstCharFirstName = firstName ? firstName.charAt(0) : "";
  // get first character from last name
  const firstCharLastName = lastName ? lastName.charAt(0) : "";
  // get color from first character of first name
  const color = getColorFromLetter(firstCharFirstName);
  return (
    <span className={`flex w-8 h-8 justify-center items-center rounded-full text-white ${color} text-sm`}>
      {firstCharFirstName + firstCharLastName}
    </span>
  );
};

export default Avatar;