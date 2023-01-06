import React from 'react'
import { RoutePath } from './src/types/routes'
import { Route, Routes } from 'react-router-dom'
import Login from './src/components/Login'

const Router = () => {
  return (
    <Routes>
        <Route path={RoutePath.LOGIN} element={<Login/>}/>
    </Routes>

  )
}

export default Router