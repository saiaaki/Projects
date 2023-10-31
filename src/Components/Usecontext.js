import React from 'react'
import UsecontextC from './UsecontextC'
export const UserContext = React.createContext();
const Usecontext1 = () => {
    var input = "hello this is UseContext"
  return (
    <div>
        <center>
        <UserContext.Provider value={input}>
           <UsecontextC/>
        </UserContext.Provider>
        </center>
       
    </div>
  )
}

export default Usecontext1