import { useState, useEffect ,useRef} from 'react';

const Note = ({id,text,date,handleDeleteNote,EditNote, handleSwap,handleSwapDelete,}) =>{
   
    const [editting, setEditting] = useState(false);
    const [noteText, setNoteText] = useState(text);
    const [select,setSelect] = useState(false);
    
	const characterLimit = 255;
    const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setNoteText(event.target.value);
		}
	};

	const handleSelected = (event) => 
        {  event.stopPropagation();
            event.preventDefault();
            if (event.target === event.currentTarget){
            setSelect((select) => !select)
            console.log("handleSelected select:",select)
            if (select){ event.target.classList.add("note-select");}
            else {event.target.classList.remove("note-select");}
            const note = {
                date: date,
                text: text,
                id: id
              };
            if (select) {handleSwap(note)}
            else{handleSwapDelete(id)}
            }
        } ;
    const handleEditClick = (id) => {
        const date = new Date();
        const note = {
          date: date.toLocaleDateString(),
          text: noteText,
          id: id
        };
        EditNote(note)
        setEditting(false)
    }

    
    return<div className='note' onClick={(event) => handleSelected(event)}>
      
        { !editting ? (<> <div className='note-content'  >{text} </div>
        <div className='note-footer'>
            <small>{date}</small>
            <div className='icons'>
                <span onClick={() => handleDeleteNote(id)}>delete</span>
                <span onClick={() => { setEditting(true);}}>edit</span>
            </div> 
        </div> </>): 
        (<>
        <textarea
            rows='8'
            cols='10'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note-footer'>
            <small>
                {characterLimit - noteText.length} Remaining
            </small>
            <button className='save' onClick={() =>{handleEditClick(id);}}>
                Save
            </button>
        </div>
        </>
        )}
       
            </div>

}

export default Note;
