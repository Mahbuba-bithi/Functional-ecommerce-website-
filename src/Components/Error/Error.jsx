import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'



const Error = () => {
    const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong!</h1>
       {error && <p>{error.statusText || error.message}</p>}
        <NavLink to='/'>Go Back To Home</NavLink>
      
    </div>
  )
}

export default Error
