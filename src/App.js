import { useState, useEffect} from 'react';
import { nanoid } from 'nanoid';

import NotesList from './components/NotesList';

import Header from './components/Header';

const App = () => {
	myRef = React.createRef();

	const [notes, setNotes] = useState([]);
	const [swap, setSwap] = useState([]);
	const [select,setSelect] = useState(false);


	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
		
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};
	const editNote=(noteText)=>{
        const noteupdated = notes.map(note => {
          if (note.id === noteText.id) {
            return noteText;
          } else return note;
        });
		setNotes(noteupdated)
	}
    
	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};
	
	const handleSwapDelete = (event,id) => {
	
		const newSwap = swap.filter((swap) => swap.id !== id);
		console.log(newSwap);
		setSwap(newSwap);}

	const handleSwap = (note) =>{setSwap([...swap,note])}
	useEffect(() => {
		if (swap.length>2) return
		else if(swap.length==2){
			let [swap1,swap2] = swap
			const swap_id1 = swap1.id
			const swap_text1 = swap1.text
			const swap_date1 = swap1.date
			const swap_id2 = swap2.id
			const swap_text2 = swap2.text
			const swap_date2 = swap2.date
			console.log(notes)
			console.log("1id",swap_id1 )
			console.log("2id",swap_id2)
			console.log("1text",swap_text1)
			console.log("2text",swap_text2)
			const newNote = notes.map(note => {
				if (note.id === swap_id1) {
				  return  {id:swap_id1,text:swap_text2,date:swap_date2 };
				} else if(note.id === swap_id2) return {id:swap_id2,text:swap_text1,date:swap_date1};
				else return note;
			});
			

			console.log("newNote",newNote)
			setNotes(newNote)
			setSelect(false)
			setSwap([])
			


		}
		console.log("after swap newNote",swap)
		
	}, [swap,select])
	
	
	

	return (
		
			<div className='container'>
				<Header/>
		
				<NotesList
					notes={notes}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
					handleEditNote={editNote}
					handleSwap={ handleSwap}
					handleSwapDelete ={handleSwapDelete }
					select={select}
					setSelect={setSelect}
				
				/>
			</div>
		
	);
};

export default App;