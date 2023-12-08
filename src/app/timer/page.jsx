import PomodoroTimer from '../../components/timer';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <PomodoroTimer initialWorkDuration={25} initialBreakDuration={5} /> {/* Initial durations of 25 minutes work, 5 minutes break */}
    </div>
  );
};

export default Home;
