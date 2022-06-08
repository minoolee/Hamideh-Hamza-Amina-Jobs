import Comp from './Comp'
import Companys from '../Com.json'
function Company() {
 
  return (
    <div>
      <h1>Companys</h1>
      <div>
        {Companys.map((comp)=>{
          return(
            <Comp key={comp.id} {...comp}/>
          )
        })}
      </div>
    </div>
  )
}

export default Company
