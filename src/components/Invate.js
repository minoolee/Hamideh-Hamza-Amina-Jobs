import React from 'react'

function Invate() {
  return (
    <div className='section'>
      <section className='employee-center'>
      <label htmlFor="">Name</label>
      <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" 
          id="email"
          placeholder="name@example.com"
        />
        <textarea placeholder='Write heir your message' name="" id="" cols="30" rows="10"></textarea>
        <button className='btn'>send</button>
      </section>
    </div>
  )
}

export default Invate