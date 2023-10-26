"use client"
import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSave, addTask }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSaveTask = () => {

        const combinedDateTime = `${date} ${time}`;
      
        const taskData = { title, combinedDateTime, description };

        addTask(taskData);

        // Clear the input fields after saving
        setTitle("");
        setDate("");
        setTime("");
        setDescription("");

        onClose();
    };

    const handleCancel = () => {
        // Clear the input fields when the user cancels
        setTitle("");
        setDate("");
        setTime("");
        setDescription("");
        
        onClose();
    };
  
    return (
      <div className={`popup-modal ${isOpen ? "open" : ""}`}>
        <div className="popup-modal-content">
            <h2>Create Task</h2>
            <div className="formRow">
                <input
                    type="text"
                    placeholder="Add Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="formRow">
                <input
                    type="date"
                    placeholder="Add Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="time"
                    placeholder="Add Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="formRow">
                <textarea
                    placeholder="Add Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="modal-buttons">
                <button className="save-button" onClick={handleSaveTask}>Save</button>
                <button className="close-button" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
      </div>
    );
};
  
export default Modal;
