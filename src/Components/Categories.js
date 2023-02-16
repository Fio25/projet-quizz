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

<<<<<<< HEAD
      <div className="blockCategories">
        <button className="btn-categories">Sciences</button>
        <button className="btn-categories">Français</button>
        <button className="btn-categories">Géographie</button>
        <button className="btn-categories">Sport</button>
      </div>
    </>
  );
=======
  </>
    
  )
>>>>>>> 9154d5caf920c4ac7630e9058339533e8b4cc449
}

export default Categories