  
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,handleEditNote, handleSwap,handleSwapDelete,select,
	setSelect
}) => {
	
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				
				<Note
					
					id={note.id}
					text={note.text}
					date={note.date}
					editting={note.editting}
				
					handleDeleteNote={handleDeleteNote}
					EditNote={handleEditNote}
					handleSwap = { handleSwap}
					handleSwapDelete={handleSwapDelete}
					select={select}
					setSelect={setSelect}
			
				
				
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;