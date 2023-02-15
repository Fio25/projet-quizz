import React from 'react'
import {Link} from 'react-router-dom'

function Categories() {
  return (
  <>  <div>
        <button>Sciences</button>
        <button>Litérature</button>
        <button>Géographie</button>
        <button>Chimie</button>
      </div>
            
      <Link className="iconUser" to="/ModifProfil"><i class="fa-solid fa-user"></i></Link>

  </>
    
  )
}

export default Categories