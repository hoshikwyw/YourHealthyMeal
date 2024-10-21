// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { CiViewBoard, CiForkAndKnife, CiUser, CiAlarmOn, CiCircleInfo } from "react-icons/ci";
import { Link } from 'react-router-dom';

const SideBar = () => {
    // Retrieve active menu from localStorage or set default to 1
    const [active, setActive] = useState(1);

    const menuItems = [
        { id: 1, icon: <CiViewBoard size={32} />, label: 'Dashboard', to: "/" },
        { id: 2, icon: <CiForkAndKnife size={32} />, label: 'Meals', to: "/meal" },
        { id: 3, icon: <CiUser size={32} />, label: 'User Account', to: "/profile" },
        { id: 4, icon: <CiAlarmOn size={32} />, label: 'Meal History' },
        { id: 5, icon: <CiCircleInfo size={32} />, label: 'Calorie Knowledge' },
    ];

    const clickMenu = (id) => {
        setActive(id);
    };

    return (
        <div className=' bg-hoverGreen max-w-[250px] min-h-screen'>
            {/* image section  */}
            <div className=" w-full h-full flex flex-col justify-center items-center pt-3">
                <div className=" border-4 border-ButtonGreen p-1 h-32 w-32 rounded-full">
                    <img src="/imgs/pfp.jpg" alt="" className=' w-full h-full rounded-full' />
                </div>
                <h1 className=' mt-3 font-semibold text-lg'>Hello , User</h1>
            </div>
            <div className=" w-full flex flex-col mt-10 items-center justify-evenly">

                {/* menu section  */}
                <div className=" w-full flex flex-col justify-center items-start ps-5 gap-3">
                    <ul className=' flex flex-col justify-center items-start gap-5 w-full cursor-pointer'>
                        {menuItems.map((menuItem) => (
                            <Link
                                key={menuItem.id}
                                to={menuItem?.to}
                                className={` w-full ${active === menuItem.id ? "active" : ""}`}
                                onClick={() => clickMenu(menuItem.id)}
                            >
                                <li
                                    className=' w-full flex justify-center items-center gap-2 font-semibold text-[#2C2A2A]'
                                    id={menuItem.id}
                                >
                                    {menuItem.icon}
                                    <h1
                                        className={` w-full flex items-center space-x-2 py-2 px-3 ${active === menuItem.id
                                            ? "bg-[#fff] rounded-l-full text-[#2C2A2A]"
                                            : ""
                                            }`}
                                    >
                                        {menuItem.label}
                                    </h1>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* please log in  */}
                <div className=" mt-16 px-3">
                    <a href='#'>Please Log In to access more features</a>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
