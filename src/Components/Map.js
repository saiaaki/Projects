import React from 'react'

function Map() {
    // const arr = ["React","Css","JS","Html","Python","java"]
    const arr = [
        {
            id : '1',
            title : "a"
        },
        {
            id : '2',
            title : "b"
        },
        {
            id : '2',
            title : "c"
        } 
    ]
  return (
    <div> {
        arr.map(
            (value) => <li key={value.id}>{value.id}</li>
        )
      }
    </div>
  )
}

export default Map


