import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const isLogged = useSelector((state) => state.isLogged);
  console.log(isLogged)
  return (
      <div>
          <h1>Dashboard { isLogged.toString()}</h1>
    </div>
  )
}

export default Dashboard