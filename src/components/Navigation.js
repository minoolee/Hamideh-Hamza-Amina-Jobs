import "../App.css"

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navbar" >
    
    <ul className="nav-links" >
    <li><Link className="link" to="/company/"> Company</Link></li>
    <li><Link className="link" to="/employee/"> Employees</Link></li>
    <li> <Link className="link" to="/searchJob/"> Search</Link></li>
       </ul>
       
      
    </div>
  )
}

export default Navigation