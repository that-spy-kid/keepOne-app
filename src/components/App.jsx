import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ReactPaginate from "react-paginate";
import EditNote from "./EditNote";


function App() {
  const [notes, setNotes] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const [id, setId] = useState("");

function addNote(newNote){
  setNotes(prevNotes => {
     return [...prevNotes, newNote]
  });
}

function deleteNote(id){
  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
   

      return index !== id;

    });
  });
}

function editNote(id){

  setNotes(prevNotes => {
    return prevNotes.filter((noteItem, index) =>{
       if(index === id)
       {
        document.getElementById("edittitle").value=noteItem.title;
        document.getElementById("edittagline").value=noteItem.tagline;
        document.getElementById("editdes").value=noteItem.content;
       }
       return noteItem;
    })
  });
}


  


const notesPerPage = 6;
const notesVisited = pageNumber * notesPerPage;

const displayNotes = notes.slice(notesVisited, notesVisited + notesPerPage).map((noteItem, index) => {
 
  return ( <Note
  key = {index}
  id = {index}
 title={noteItem.title}
 tagline={noteItem.tagline}
 content={noteItem.content}
 onDelete={deleteNote}
 onEdit={editNote}
 setId={setId}
 />
  );
});


  
   const pageCount = Math.ceil(notes.length / notesPerPage);
   const changePage = ({selected}) => {
     setPageNumber(selected)
   };

 


  return (
    <div>
      <EditNote id={id} notes={notes} setNotes={setNotes}/>
      <Header />
      <CreateArea onAdd={addNote}/>
      {displayNotes }

      {notes.length !== 0 ?    <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Nxt"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"prevBtn"}
        nextLinkClassName={"nxtBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />  : null  }

      <Footer/>
    </div>
  );

 

 
}

export default App;
