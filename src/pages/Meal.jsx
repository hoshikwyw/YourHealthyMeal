// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { LuSalad, LuSoup, LuFish } from "react-icons/lu";
import { GiHerbsBundle, GiHamburger, GiNoodles, GiSlicedBread } from "react-icons/gi";


const categories = [
    { id: 1, name: "Soup", icon: <LuSoup /> },
    { id: 2, name: "Salad", icon: <LuSalad /> },
    { id: 3, name: "Herbs", icon: <GiHerbsBundle /> },
    { id: 4, name: "Fish", icon: <LuFish /> },
    { id: 5, name: "Burger", icon: <GiHamburger /> },
    { id: 6, name: "Noodle", icon: <GiNoodles /> },
    { id: 7, name: "Bread", icon: <GiSlicedBread /> },
]

const Meal = () => {
    const [meat, setMeat] = useState(false)
    const [veg, setVeg] = useState(false)

    const onClickMeatInput = () => {
        setMeat(!meat)
    }

    const onClickVegInput = () => {
        setVeg(!veg)
    }

    return (
        <div className=' w-full flex'>
            {/* left side  */}
            <div className=" w-[70%]">
                {/* Title part  */}
                <div className=" flex items-center justify-between px-3 py-2">
                    <h1 className=' text-[#000] text-2xl font-medium'>What is Healthy Today ? </h1>
                    <div className=" flex items-center gap-3">
                        <div className=" flex items-center gap-2">
                            <input
                                type="checkbox"
                                id='meatInputButton'
                                className={`toggle border-none toggle-sm ${meat ? 'bg-[#ffffff] [--tglbg:#11867B] hover:bg-[#ffffff]' : 'bg-[#d2d2d2] [--tglbg:#eeeeee] hover:bg-[#d2d2d2]'}`}
                                onChange={onClickMeatInput} />
                            <label htmlFor="#meatInputButton" className=' text-sm font-medium'>Meat</label>
                        </div>
                        <div className=" flex items-center gap-2">
                            <input
                                type="checkbox"
                                id='meatInputButton'
                                className={`toggle border-none toggle-sm ${veg ? 'bg-[#ffffff] [--tglbg:#11867B] hover:bg-[#ffffff]' : 'bg-[#d2d2d2] [--tglbg:#eeeeee] hover:bg-[#d2d2d2]'}`}
                                onClick={onClickVegInput} />
                            <label htmlFor="#meatInputButton" className=' text-sm font-medium'>Veg</label>
                        </div>
                    </div>
                </div>
                {/* Meals Category  */}
                <div className=" flex gap-2 items-center w-full justify-evenly">
                    {categories.map((category, index) => (
                        <div key={index} className=" bg-hoverGreen w-16 h-28 rounded-t-[35px] rounded-b-[35px] flex flex-col justify-center items-center py-1">
                            <h1 className=' h-[50%] bg-[#fff] w-[80%] rounded-full'>icon</h1>
                            <h1 className=' h-[50%]'>{category.name}</h1>
                        </div>
                    ))}
                </div>
                {/* meal carts  */}
                <div className="">
                    {/* filter title  */}
                    <div className="">
                        <h1>Filter</h1>
                        <h1>Sort by: <span>Calorie</span></h1>
                    </div>
                    {/* meal cards  */}

                </div>
            </div>
            {/* right side  */}
            <div className=" w-[30%] border-2 border-[#E4F4C3]"></div>
        </div>
    )
}

export default Meal