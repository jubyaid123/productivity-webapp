'use client'
import React from 'react'
import Sidebar from '../../components/Sidebar'
// import MonthlyCal from '../../components/MonthlyCal'
// import WeeklyCal from '../../components/WeeklyCal'
import CalendarComponent from '../../components/calendar'


const Calendar = () => {
  return (
    <div className='md:grid-cols-2 calender-placeholder'>
      <Sidebar />
      <div className=''><CalendarComponent/></div>
      
    </div>
  )
}

export default Calendar
