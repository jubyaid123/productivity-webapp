'use client'
import dayjs from "dayjs";
import { generateDate, months } from "../util/calendar";
import calBool from "../util/calBool";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

export default function MonthlyCal() {
  // Days of the week
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  // Get the current date and set initial state
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  return (
    <div className="mt-10 ml-10 flex gap-10 sm:divide-x justify-center sm:w-3/4 mx-auto h-screen items-center sm:flex-row flex-col">
      <div className="w-4/5 h-full ml-10">
        <div className="flex justify-between items-center mb-4 ml-5">
          {/* Display the current month and year */}
          <h1 className="select-none text-3xl font-semibold">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-10 items-center">
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
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            // Display the days of the week
            <h1
              key={index}
              className="ml-4 text-xl text-center h-16 w-16 grid place-content-center text-gray-500 select-none"
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
                className="p-4 text-center h-16 grid place-content-center text-xl border-t">
                <h1
                  className={calBool(
                    // Style for current month and selected date
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-red-600 text-white" : "",
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
        <div className="mt-10 sm:px-5">
         {/*Display the schedule for the selected date*/}
        <h1 className="text-2xl font-semibold">
          Schedule for {selectDate.toDate().toDateString()}
        </h1>
        <p className="text-gray-400">No remaining tasks for today.</p>
      </div>
      </div>
    </div>
  );
}
