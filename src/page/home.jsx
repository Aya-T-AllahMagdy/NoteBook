import { useState,useEffect } from 'react';
import Header from '../components/header/header';
import NoteList from '../components/notesList/notesList';
import Search from '../components/search/search';
export default function Home() {
    const [search ,setSearch]=useState('')
    const [darkMode , setDarkMode] =useState(false)
    console.log(darkMode)
    const [notes ,setNotes] = useState ([
      {
        id: Math.random(),
        text:'welcom to notes app',
        date: "12/12/2022"
      }
    ])
    const addNote =(text)=>{
      const date = new Date();
      const newNote ={
        id:Math.random(),
        text:text,
        date:date.toLocaleDateString(),
      }
      const newNotes =[...notes , newNote];
      setNotes(newNotes)
    }
    const deleteNote=(id)=>{
      const newNotes =  notes.filter((note)=>note.id !== id)
      setNotes(newNotes)
    }
    useEffect(()=>{
      const SaveNotes= JSON.parse(localStorage.getItem('notesApp'))
      if(SaveNotes){
        setNotes(SaveNotes)
      }
    },[])
    useEffect(()=>{
      localStorage.setItem('notesApp',JSON.stringify(notes))
    },[notes])
  return (
    <div>
        <Header handleDarkMode={ setDarkMode}/>
      <Search handleSearchNote={setSearch}/>
     <NoteList notes={notes.filter((note)=>note.text.toLowerCase().includes(search))} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  )
}
