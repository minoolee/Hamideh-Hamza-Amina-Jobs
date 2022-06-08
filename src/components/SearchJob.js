import Companys from '../Com.json'
import React from 'react'
import { useState } from 'react'
function SearchJob() {
  const [userTitle, setUserTitle]= useState("")
  const [find, setFind] = useState("")
  const rightTitle = ()=>{
    let rightCompany = Companys.filter((company)=>company.title !== setUserTitle.value)
    setFind(rightCompany)
  }
  return (
    <div className='container'>
      <h1>Find you dream job</h1>
      <form action="" className='comp'>
        <label htmlFor="">First name</label>
        <input type="text" />
        <label htmlFor="">Last Name</label>
        <input type="text" />
        <label htmlFor="">Female</label>
        <input type="radio" />
        <label htmlFor="">Male</label>
        <input type="radio" />
        <label htmlFor="">Profession</label>
        <input type="text" value={userTitle} onChange={(e)=>setUserTitle(e.target.value)} />
        <label htmlFor="">Fulltime job</label>
        <input type="checkbox" />
        <label htmlFor="">Parttime job</label>
        <input type="checkbox" />
        <label htmlFor="">Email</label>
        <input type="email" 
          id="email"
          placeholder="name@example.com"
        />
        <label htmlFor="">Experience</label>
        <input type="text" placeholder='Your experience' />
      </form>
     <button onClick={rightTitle}>search</button>
     <div>{find}</div>
    </div>
  )
}

export default SearchJob














/* import React from 'react'
import { useGlobalContext } from '../context'
function SearchJob() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])
  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}
 
export default SearchJob */
