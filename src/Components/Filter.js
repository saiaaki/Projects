import React from 'react'

function Filter() {
    // const names = ["sai","sunny","mani","anil"]
    const arr = ["10","20","30","40"]
    // const filtered = names.filter(name => name.includes('y'))
    const filtered = arr.filter(name => name>10)  
  return (
    <div>
       {
        filtered.map(item =><li>{item}</li>)
       } 
    </div>
  )
}

export default Filter