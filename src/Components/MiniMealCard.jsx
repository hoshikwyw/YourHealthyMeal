/* eslint-disable no-unused-vars */
import React from 'react'

const MiniMealCard = () => {
    return (
        <div className=" flex w-full gap-3 items-start shadow-lg rounded-md p-3 h-24 border-hoverGreen bg-hoverGreen">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJ2bRt58ousEDJvpbq3n7iL9ovGH2sN2b2g&s" alt="" className=' w-16 h-16 rounded-md' />
            <div className=" flex w-full justify-between">
                <div className="">
                    <div className=" text-sm">
                        <h4>bar soup</h4>
                        <h4>bar caption</h4>
                    </div>
                    <h4>bar rating</h4>

                </div>
                <p>200 Kcal</p>
            </div>
        </div>
    )
}

export default MiniMealCard