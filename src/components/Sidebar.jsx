"use client"
import classNames from "classnames";
import React, { useState } from "react";
import CollapsIcon from "./CollapseIcons";

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);

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

    return (
        <div className={wrapperClasses} style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
            <div className="flex flex-col">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <span className={classNames({ hidden: toggleCollapse })}>
                            Sidebar
                        </span>
                    </div>
                    <button className={collapseIconClasses} onClick={handleSidebarToggle}>
                        <CollapsIcon />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;