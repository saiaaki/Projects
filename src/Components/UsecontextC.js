import React from 'react'
import {UserContext} from './Usecontext'
const UsecontextC = () => {
  return (
    <div> 
        <UserContext.Consumer>
            {value=><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default UsecontextC