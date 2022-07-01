
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function CreateArea(props) {
 


  const [isExpanded, setExpanded] = useState(false);


  

  const [note, setNote] = useState({
    title: "",
    content: "",
    tagline: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    if(note.title!=="" && note.content !=="" && note.tagline!=="")
    {
      props.onAdd(note);
    }
    
    setNote({
      title: "",
      content: "",
      tagline: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  
  return (
    <div>
      <form className="create-note">
       {isExpanded && ( <div><input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> 
        <a href="#"><span className="material-symbols-outlined">push_pin</span></a>
        <input type="text" name="tagline" onChange={handleChange} value={note.tagline} placeholder="Tagline" style={{fontSize:"12px"}}/>
        </div>)}
        
         <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 2 : 1}
        />
       
        
        <Zoom in={isExpanded}>
        <Fab  onClick={submitNote}><AddIcon /></Fab></Zoom>

      </form>
    </div>
   
  );
}

export default CreateArea;
