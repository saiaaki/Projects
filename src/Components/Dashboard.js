import React from 'react'

const Dashboard = ({match}) => {
  return (
    <div>
        <center>
            <h3>Dashboard profilel name is : {match.params.fullname}</h3>
        </center>
    </div>
  )
}

export default Dashboard;


