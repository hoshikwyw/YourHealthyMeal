// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Meal from "../pages/Meal"
import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

const Path = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default Path