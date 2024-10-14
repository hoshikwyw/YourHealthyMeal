// eslint-disable-next-line no-unused-vars
import React from 'react'
import SideBar from './Layout/SideBar'
import Path from './paths/Path'

const App = () => {
  return (
    <div className=' flex w-full h-screen justify-center items-center'>
      <SideBar />
      <div className=" w-full h-full">
        <Path />
      </div>
    </div>
  )
}

export default App