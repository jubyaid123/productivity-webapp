'use client'
import dayjs from "dayjs";
import { generateDate, months } from "../util/calendar";
import calBool from "../util/calBool";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

export default function MonthlyCal() {
  // Days of the week
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get the current date and set initial state
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className=" select-none mt-10 ml-10 flex justify-center sm:w-full mx-auto h-screen items-center sm:flex-row flex-col">
      <div className="w-4/5 h-full ml-10">
        <div className="flex justify-center flex-col items-center">
          {/* Display the current month and year */}
          <h1 className="text-4xl font-semibold mb-4">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex">
            {/* Navigate to the previous month */}
            <GrFormPrevious
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            {/* Go back to the current month */}
            <h1
              className="cursor-pointer hover:scale-105 text-xl"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            {/* Navigate to the next month */}
            <GrFormNext
              className="w-8 h-8 cursor-pointer hover:scale-105 transition-all"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 text-xl ">
          {days.map((day, index) => (
            // Display the days of the week
            <h1
              key={index}
              className=" text-[30px] text-center h-16 w-50 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => (
              <div
                key={index}
                className="p-4 text-center h-60 grid mx-auto text-xl border-t">
                <h1
                  className={calBool(
                    // Style for current month and selected date
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-blue-600 text-white" : "",
                    selectDate.toDate().toDateString() === date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    "h-12 w-12 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  // Handle date selection
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
