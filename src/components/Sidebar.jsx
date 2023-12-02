"use client"
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import CollapsIcon from "./CollapseIcons";
import Modal from "./Modal";

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [editedTask, setEditedTask] = useState(null);

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
        setEditedTask(null); // Reset editedTask when creating a new task
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditedTask(null); // Reset editedTask when closing the modal
    };

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    };

    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handleEditTask = (index) => {
        const taskToEdit = tasks[index];
        // Set the task to be edited in the state
        setEditedTask({ ...taskToEdit, index });
        // Open the modal for editing
        setIsModalOpen(true);
    };

    const handleSaveTask = (index, updatedTask) => {
        // Update the task in the tasks array
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
        // Update the tasks in local storage
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
        // Close the modal
        setIsModalOpen(false);
        setEditedTask(null);
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
                            <button onClick={handleCreateTask} className="submitButton">
                                Create Task
                            </button>
                            <ul className="task-list-container">
                                {tasks.map((task, index) => (
                                    <li key={index} className="task">
                                        <div>
                                            <strong className="bold">Title:</strong> {task.title}
                                        </div>
                                        <div>
                                            <strong className="bold">Date & Time:</strong> {task.combinedDateTime}
                                        </div>
                                        <div>
                                            <strong className="bold">Description:</strong> {task.description}
                                        </div>
                                        <button onClick={() => handleEditTask(index)} className="editButton">Edit</button>
                                        <button onClick={() => handleDeleteTask(index)} className="deleteButton">
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} addTask={addTask} onSave={handleSaveTask} editedTask={editedTask} />
        </div>
    );
};

export default Sidebar;