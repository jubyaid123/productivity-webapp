import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, onSave, addTask, editedTask }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    // Use useEffect to update the form fields when editedTask changes
    useEffect(() => {
        if (editedTask) {
        const { title, combinedDateTime, description } = editedTask;
        // Split the combinedDateTime into date and time
        const [editedDate, editedTime] = combinedDateTime.split(" ");
        
        setTitle(title || "");
        setDate(editedDate || "");
        setTime(editedTime || "");
        setDescription(description || "");
        }
    }, [editedTask]);

    const handleSaveTask = () => {
        const combinedDateTime = `${date} ${time}`;
        const taskData = { title, combinedDateTime, description };

        if (!title || !date || !time || !description) {
            // Check if any required field is empty
            alert("Please fill in all required fields.");
            return;
        }

        if (editedTask) {
            onSave(editedTask.index, taskData);
        } else {
            addTask(taskData);
        }

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
            <h2>{editedTask ? "Edit Task" : "Create Task"}</h2>
            <div className="formRow">
            <input
                type="text"
                placeholder="Add Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </div>
            <div className="formRow">
            <input
                type="date"
                placeholder="Add Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="time"
                placeholder="Add Time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            />
            </div>
            <div className="formRow">
            <textarea
                placeholder="Add Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            </div>
            <div className="modal-buttons">
            <button className="save-button" onClick={handleSaveTask}>
                {editedTask ? "Update" : "Save"}
            </button>
            <button className="close-button" onClick={handleCancel}>
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default Modal;
