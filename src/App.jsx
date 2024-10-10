// eslint-disable-next-line no-unused-vars
import React from 'react'
import SideBar from './Layout/SideBar'
import Meal from './pages/Meal'

const App = () => {
  return (
    <div className=' flex w-full h-screen justify-center items-center'>
      <SideBar />
      <div className=" w-full h-full">
        <Meal />
      </div>
    </div>
  )
}

export default App