import {MdEdit,MdDeleteForever} from 'react-icons/md';
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
        { 
            setSelect((select) => !select)
            if (select){ event.target.classList.add("note-select");}
            else {event.target.classList.remove("note-select");}
            const note = {
                date: date,
                text: text,
                id: id
              };
            if (select) {handleSwap(note)}
            else{handleSwapDelete(id)}
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

    
    return <div className='note' onClick={(event) => handleSelected(event)}>
      
        { !editting ? (<> <div className='note-content'>{text}</div>
        <div className='note-footer'>
            <small>{date}</small>
            <div className='icons'>
                <MdEdit className='edit-icon' size='1.3em' onClick={() => { setEditting(true);}}/>
                <MdDeleteForever onClick={() => handleDeleteNote(id)} className='delete-icon' size='1.3em'/>
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
