"use client"
import classNames from "classnames";
import React, { useState } from "react";
import CollapsIcon from "./CollapseIcons";
import Modal from "./Modal";

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    
    const handleSaveTask = (taskData) => {
        // Handle the task-saving logic here with the task data.
        console.log("Task data:", taskData);
    };
    
    return (
        <div className={wrapperClasses} style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <span className={classNames({ hidden: toggleCollapse })}>
                        <button onClick={handleCreateTask} className="submitButton">Create Task</button>
                        </span>
                    </div>
                    <button className={collapseIconClasses} onClick={handleSidebarToggle}>
                        <CollapsIcon />
                    </button>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveTask} />
        </div>
    );
};

export default Sidebar;