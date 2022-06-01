import React from 'react'
import Workers from '../employees.json';
function Profile() {
  return (
    <div>
    {Workers.filter((person)=>{
      <div>
        <img src={person.img} alt="" />
      </div>
    })}
    </div>
  )
}

export default Profile