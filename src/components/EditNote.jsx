import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

export default function EditNote({id, notes, setNotes}) {

  function handleClick() {
 const updateNotes= notes.map((elem,index)=> {
      if(id === index){
        return ({
          ...elem, title:document.getElementById("edittitle").value,
          tagline : document.getElementById("edittagline").value,
          content : document.getElementById("editdes").value

        });
      }
      else {
       return elem;
      }
    }
  )
setNotes(updateNotes);
}
  return (
    <>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form >
       <input
          name="title"
          className='form-control'
          id='edittitle'
          placeholder="Title"
         
        /> 
       
        <input type="text"  name="tagline" className='form-control' id='edittagline' placeholder="Tagline" style={{fontSize:"12px" , marginTop:"20px"}}/>
      
        
         <textarea
         style={{marginTop:"20px"}}
          name="content"
          className='form-control'
          id='editdes'
          placeholder="Take a note..."
          rows="2"
        />
       
        
    
      </form>
      </div>
      <div className="modal-footer">
        <Fab type="button" className="btn btn-primary" style={{backgroundColor:"#13aaf5"}} data-bs-dismiss="modal" onClick={handleClick}><AddIcon/></Fab>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
