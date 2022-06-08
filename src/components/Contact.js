import React from 'react'

function Contact() {
  return (
    <div>
         <form action="" className='comp'>
          <label htmlFor="">First Name</label>
          <input type="text" name='firstName' placeholder='enter your first name'/>
          <label htmlFor="">Last name</label>
          <input type="text" name='lastName' placeholder='enter your last name'/>
          <label htmlFor="">Title</label>
          <input type="text" />
          <label htmlFor="">Experience</label>
          <input type="text" name='experience' placeholder='Enter experience' />
          <label htmlFor="">Email</label>
        <input type="email" 
          id="email"
          placeholder="name@example.com"
        />
       </form>
       <div className='comp'>
       <textarea  placeholder='Hallo you can write heir' name="" id="" cols="30" rows="10"></textarea>
       </div>
      
          <button className='btn'>send</button>
      
    </div>
  )
}

export default Contact