"use client"
import classNames from "classnames";
import React, { useState } from "react";
import CollapsIcon from "./CollapseIcons";
import Modal from "./Modal";

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 flex justify-between flex-col sidebar",
        {
        ["w-80"]: !toggleCollapse,
        ["w-20"]: toggleCollapse,   
        }
    );

    const collapseIconClasses = classNames(
        "p-4 rounded bg-light-lighter absolute right-0",
        {
        "rotate-180": toggleCollapse,
        }
    );

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const handleCreateTask = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const addTask = (newTask) => {
        console.log("Task data:", newTask);
        setTasks([...tasks, newTask]);
    };      
    
    return (
        <div className={wrapperClasses} style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
            <div className="flex flex-col relative">
                <button className={collapseIconClasses} onClick={handleSidebarToggle}>
                    <CollapsIcon />
                </button>
                <div className="flex items-center justify-between">
                    <div className="flex items-center pl-1 gap-4">
                        <span className={classNames({ hidden: toggleCollapse })}>
                        <button onClick={handleCreateTask} className="submitButton">Create Task</button>
                        <ul>
                            {tasks.map((task, index) => (
                                <li key={index}>
                                <div>
                                    <strong>Title:</strong> {task.title}
                                </div>
                                <div>
                                    <strong>Date & Time:</strong> {task.combinedDateTime}
                                </div>
                                <div>
                                    <strong>Description:</strong> {task.description}
                                </div>
                                </li>
                            ))}
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} addTask={addTask} />
        </div>
    );
};

export default Sidebar;