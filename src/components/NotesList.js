  
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
	handleEditNote, 
	handleSwap,
	handleSwapDelete,
}) => 
	{return (
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
	
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;