import Sidebar from '../../components/Sidebar'; 

const CalendarPage = () => {
  return (
    <div className='md:grid-cols-2 calender-placeholder'>
      <Sidebar />
      <div className='calender'>Calender</div>
    </div>
  );
};

export default CalendarPage;
