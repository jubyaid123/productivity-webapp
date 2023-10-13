import React from 'react'
import Sidebar from '../../components/Sidebar'
import MonthlyCal from '../../components/MonthlyCal'

const Calendar = () => {
  return (
    <div className='md:grid-cols-2 calender-placeholder'>
      <Sidebar />
      <MonthlyCal/>
    </div>
  )
}

export default Calendar
