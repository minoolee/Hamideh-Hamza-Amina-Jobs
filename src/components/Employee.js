import { Link } from 'react-router-dom'
import React from 'react'
import Workers from '../employees.json';
function Teams() {
  return (
    <div className="section">
       {
        Workers.map(worker => {
        return(
          <div className='section-title'>
         <h1>{worker.title}</h1>
         <img width={"250px"} src={worker.img} alt={worker.name} />
         <h6>info : </h6>
         <ul>
           <li><h5>{worker.birthDate}</h5></li>
           <li><h5>{worker.phone}</h5></li>
           <li><h5>{worker.address}</h5></li>
         </ul>
         <Link to={`/invate/`} className='btn'>invite</Link>
          </div>
       

        )
      })
      }
    </div>
  )
}

export default Teams

