'use client'
import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeeklyCal() {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(null); // Initialize selectDate as null

  const startOfWeek = today.startOf('week');
  const endOfWeek = today.endOf('week');

  const generateDateRange = () => {
    const dates = [];
    for (let date = startOfWeek; date.isBefore(endOfWeek); date = date.add(1, 'day')) {
      dates.push(date);
    }
    return dates;
  }

  const calStyle = (selected, isToday) => {
    const classes = ["h-12", "w-12", "rounded-full", "grid", "place-content-center", "cursor-pointer", "select-none"];

    if (selected) {
      classes.push("bg-black", "text-white");
    } else {
      classes.push(isToday ? "bg-blue-600 text-white" : "text-gray-400");
    }

    return classes.join(" ");
  };
  return (
    <div className=" select-none mt-10 ml-10 flex justify-center sm:w-full mx-auto h-screen items-center sm:flex-row flex-col">
      <div className="w-4/5 h-full ml-10">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-4xl font-semibold mb-4">
            {startOfWeek.format("MMM DD, YYYY")} - {endOfWeek.format("MMM DD, YYYY")}
          </h1>
          <div className="flex">
            <GrFormPrevious
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.subtract(1, 'week'));
              }}
            />
            <h1
              className="cursor-pointer hover:scale-105 text-xl"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.add(1, 'week'));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 text-xl">
          {daysOfWeek.map((day, index) => (
            <h1
              key={index}
              className="text-[30px] text-center h-16 w-50 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {generateDateRange().map((date, index) => (
            <div
              key={index}
              className="p-4 text-center h-60 grid mx-auto text-xl border-t"
            >
              <h1
                className={calStyle(
                  
                  selectDate && selectDate.toDate().toDateString() === date.toDate().toDateString(),
                  date.isSame(today, 'day')
                )}
                onClick={() => {
                  setSelectDate(date);
                }}
              >
                {date.format("DD")}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

