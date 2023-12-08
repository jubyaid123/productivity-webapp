'use client'

import { useState, useEffect } from 'react';

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const [inputTime, setInputTime] = useState('');
    const [overTime, setOverTime] = useState(false)

    useEffect(() => {
        let interval;
        
        if (!overTime && isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (isRunning){
          setOverTime(true)
          interval = setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft + 1);
        }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeLeft]);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const handleInputChange = (e) => {
        setInputTime(e.target.value);
    };

    const setCustomTime = () => {
        const newTime = parseInt(inputTime, 10);
        if (!isNaN(newTime) && newTime > 0) {
            setOverTime(false)
            setTimeLeft(newTime * 60);
            setInputTime('');
            setIsRunning(false);
        }
    };

    const resetTimer = () => {
        setOverTime(false)
        setTimeLeft(0 * 60);
        setIsRunning(false);
    };

    const timerColor = overTime ? 'text-red-500' : 'text-gray-700';

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes} min ${seconds} sec`;
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className={`w-500px text-8xl font-bold ${timerColor}`}>{formatTime(timeLeft)}</div>
            <div className="mt-4 flex">
                <input
                    type="number"
                    placeholder="Enter time in minutes"
                    value={inputTime}
                    onChange={handleInputChange}
                    className="px-4 py-2 mr-2 text-gray-700 border rounded"
                />
                <button
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
                    onClick={setCustomTime}
                >
                    Set Time
                </button>
            </div>
            <button
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={toggleTimer}
            >
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
                className="px-4 py-2 mt-2 text-white bg-red-500 rounded hover:bg-red-700"
                onClick={resetTimer}
            >
                Reset
            </button>
        </div>
    );
}
