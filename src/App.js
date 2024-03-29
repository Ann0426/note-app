import { useState, useEffect,} from 'react';
import { nanoid } from 'nanoid';
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {

	const [notes, setNotes] = useState([]); // [obj,obj ....]
	const [swap, setSwap] = useState([]);
	
	const [{}, dispatch] = useStateValue();

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
		setNotes(newNotes)
		console.log("deleteNote newNotes:",newNotes)
		setSwap([])
		console.log("deleteNote swap:",swap)
		
	};
	
	const handleSwapDelete = (id) => {
	
		const newSwap = swap.filter((swap) => swap.id !== id);
		setSwap(newSwap)
		console.log("newswapdel",newSwap);
		;}

	const handleSwap = (note) =>{
		setSwap([...swap,note]);
		console.log(" handleSwap note",note);
		console.log(" handleSwap swap",swap);
	}

	useEffect(() => {
		if(swap.length<2) return
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
			setSwap([])
		}
		console.log("after swap newswap",swap)
		
	}, [swap])


	return (
		<div>
		<Router>
			
			<Route  exact  path = "/" >
				
				<div className='container'>
					<Header/>
					<NotesList	
						notes={notes}
						handleAddNote={addNote}
						handleDeleteNote={deleteNote}
						handleEditNote={editNote}
						handleSwap={ handleSwap}
						handleSwapDelete ={handleSwapDelete }
	
					/>
				</div>
			</Route>
		
	</Router>	
	</div>
	);
};

export default App;