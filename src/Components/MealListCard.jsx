/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoAppsOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const MealListCard = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    console.log(data.menu);

    return (
        <div className=' p-5 flex items-center gap-5 max-w-[60%] mx-auto min-w-[60%] rounded-md shadow-md'>
            <div className=" cursor-grab">
                <IoAppsOutline size={32} color='#7b7b7b' />
            </div>
            <div className=" w-24">
                <img src={data?.img} alt="" className=' w-full h-20 rounded-md' />
            </div>
            <div className=" flex flex-col justify-between items-start w-full gap-5">
                <div className=" flex w-full h-full items-start justify-between">
                    <div className="">
                        <p>{data?.menu}</p>
                        <p>{data?.calorie} Kcal per serve</p>
                    </div>
                    <div className="">
                        <p className=' text-ButtonGreen'>${data?.price}</p>
                    </div>
                </div>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-ButtonGreen" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-ButtonGreen" defaultChecked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-ButtonGreen" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-ButtonGreen" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-ButtonGreen" />
                </div>
            </div>

        </div>
    )
}

export default MealListCard