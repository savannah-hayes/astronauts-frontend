import React from 'react'

const DateStamp = (dates) => {
  const birthDate = new Date(dates);
  const date = birthDate.getDate();
  const year = birthDate.getFullYear();

  const month = birthDate.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const currentMonth = months[month];

  const daysEndingString = (dates) => {
    if (dates > 3 && dates < 21) return "th";
    switch (dates % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `Born: ${currentMonth} ${date}${daysEndingString()}, ${year}`;
};

const BirthDate = ({ date }) => <p>{DateStamp(date)}</p>;

export default BirthDate;