import React from 'react'
import HomePage from '../views/dashboard/HomePage'
import Onboarding from '../views/onboarding/onboarding'
import { Routes, Route, Navigate } from 'react-router-dom'
import RequireAuth from './ProtectedRoute'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Onboarding />}></Route>
        <Route
          path="/"
          element={
            <RequireAuth redirectTo="/login">
              <HomePage />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  )
}

export default Router
