// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import { LuSalad, LuSoup, LuFish } from "react-icons/lu";
import { GiHerbsBundle, GiHamburger, GiNoodles, GiSlicedBread } from "react-icons/gi";
import { mealLists } from "../assets/js/mealList.js"
import MealListCard from '../Components/MealListCard';
import MiniMealCard from '../Components/MiniMealCard.jsx';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPerson } from "react-icons/go";



const categories = [
    { id: 1, name: "Soup", icon: <LuSoup size={32} /> },
    { id: 2, name: "Salad", icon: <LuSalad size={32} /> },
    { id: 3, name: "Herbs", icon: <GiHerbsBundle size={32} /> },
    { id: 4, name: "Fish", icon: <LuFish size={32} /> },
    { id: 5, name: "Burger", icon: <GiHamburger size={32} /> },
    { id: 6, name: "Noodle", icon: <GiNoodles size={32} /> },
    { id: 7, name: "Bread", icon: <GiSlicedBread size={32} /> },
]

const Meal = () => {
    const [meat, setMeat] = useState(false)
    const [veg, setVeg] = useState(false)
    const [categoryId, setCategoryId] = useState(1)

    const onClickMeatInput = () => {
        setMeat(!meat)
    }

    const onClickVegInput = () => {
        setVeg(!veg)
    }

    const categoryClick = (id) => {
        setCategoryId(parseInt(id));
    }

    return (
        <div className=' w-full flex h-full'>
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
                        <div key={index} className={`${categoryId === category.id ? "bg-hoverGreen" : ""} w-16 h-28 rounded-t-[35px] rounded-b-[35px] flex flex-col justify-center items-center py-1 shadow-md border border-hoverGreen cursor-pointer`} onClick={() => categoryClick(category.id)}>
                            <h1 className=' h-[50%] bg-[#fff] w-[80%] rounded-full flex justify-center items-center'>{category.icon}</h1>
                            <h1 className=' h-[50%] font-normal text-sm flex justify-center items-center'>{category.name}</h1>
                        </div>
                    ))}
                </div>
                {/* meal carts  */}
                <div className=" mt-3">
                    {/* filter title  */}
                    <div className=" w-full flex justify-between px-5 pt-3">
                        <h1>Filter</h1>
                        <h1>Sort by: <span className=' text-ButtonGreen font-semibold'>Calorie</span></h1>
                    </div>
                    <div className=" h-[1px] bg-ButtonGreen mx-5"></div>
                    {/* meal cards  */}
                    <div className=" flex flex-col justify-center items-center gap-3 my-3">
                        {mealLists && mealLists.map((meal, index) => (
                            <MealListCard key={index} data={meal} />
                        ))}
                    </div>
                </div>
            </div>
            {/* right side  */}
            <div className=" w-[30%] h-full border-2 border-[#E4F4C3]">
                <div className=" flex w-full justify-end items-center gap-3 px-5 py-2">
                    <button>Log In</button>
                    <button><IoMdNotificationsOutline size={24} /></button>
                    <button><GoPerson size={22} /></button>
                </div>
                <div className=" px-5 ">
                    <div className="">
                        <h1 className=' text-2xl font-normal'>Make Your Meal Healthy</h1>
                        <h4 className=' font-normal text-sm text-[#7b7b7b] tracking-widest'>14 October 2024</h4>
                    </div>
                    {/* Three meals  */}
                    <div className=" w-full flex flex-col gap-8 my-8">
                        {/* breakfast part  */}
                        <div className="">
                            <label htmlFor="" className=' font-normal tracking-wide'>Breakfast</label>
                            <MiniMealCard />
                        </div>
                        {/* lunch part  */}
                        <div className="">
                            <label htmlFor="" className=' font-normal tracking-wide'>Lunch</label>
                            {/* <MiniMealCard /> */}
                            <div className=" border border-dashed border-ButtonGreen w-full h-24 ">
                                <p className=' w-full h-full flex justify-center items-center'>Drop menu here to make an order</p>
                            </div>
                        </div>
                        {/* dinner part  */}
                        <div className="">
                            <label htmlFor="" className=' font-normal tracking-wide'>Dinner</label>
                            {/* <MiniMealCard /> */}
                            <div className=" border border-dashed border-ButtonGreen w-full h-24 ">
                                <p className=' w-full h-full flex justify-center items-center'>Drop menu here to make an order</p>
                            </div>
                        </div>
                    </div>
                    {/* Total Pay  */}
                    <div className="">
                        <p>Your Total Cost for Three Meals : $ <span>400</span> </p>
                    </div>
                    {/* Total Calorie  */}
                    <div className="">
                        <p>Your Total Calorie for Three Meals : <span>1200</span> </p>
                    </div>
                    <button className=' px-3 py-1 bg-ButtonGreen text-[#fff] font-semibold rounded-lg shadow-md'>Make an order</button>
                </div>
            </div>
        </div>
    )
}

export default Meal