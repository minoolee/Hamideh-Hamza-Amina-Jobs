import React, { useState } from 'react';

import { Link } from 'react-router-dom'

function Comp({id, img, text, name, phone,title, address, msg}) {
   const [readMore, setReadMore] = useState(false);
  return (
    <div className='container'>
       <article className='section-center' >
       <section>
        <img src={img} alt={name} />
          <div>
          <h6>{name} </h6>
             <h6>{phone}</h6>
             <h6>{address}</h6>
             <h6>Searching : {title}</h6>
             </div>
             </section>
         
          <section className='comp'>
          <p>{readMore ? text : `${text.substring(0,280)}...`}
             <button className='btn' onClick={()=>setReadMore(!readMore)}>
                {readMore ? 'show less' :' read more'}
             </button></p>
             <Link to={`/contact/`} className='btn' >take contact with us</Link>
          </section>
       </article>
    </div>
  )
}

export default Comp