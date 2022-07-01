import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/EditTwoTone';


function Note(props){
  

    function handleClick() {
        props.onDelete(props.id);

    }
    function handleEdit() { 
        props.onEdit(props.id);
        props.setId(props.id);
    }
    

    return (
       
    <div className="note" style={{textTransform:"capitalize"}}>
        <h1>{props.title}</h1>
        <p style={{marginLeft: "27vh", fontSize:"12px"}}>{props.tagline}</p>
        <p>{props.content}</p>
        <button onClick={handleClick} style={{color:"#F4364C"}}><DeleteIcon /></button>
        <button type="button" data-bs-toggle="modal" onClick={handleEdit} data-bs-target="#exampleModal">
        <EditIcon /></button>

    </div>
     ) ;
}

export default Note;