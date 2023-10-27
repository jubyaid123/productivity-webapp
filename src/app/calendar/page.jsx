import React from 'react'
import Sidebar from '../../components/Sidebar'
// import MonthlyCal from '../../components/MonthlyCal'
// import WeeklyCal from '../../components/WeeklyCal'
import Cal from '../../components/Cal'

const Calendar = () => {
  return (
    <div className='md:grid-cols-2 calender-placeholder'>
      <Sidebar />
      <div></div>
      {/* <MonthlyCal /> */}
      {/* <WeeklyCal/> */}
      <Cal/>
    </div>
  )
}

export default Calendar
