import React ,{useState} from "react";
import './addNote.css'
export default function AddNote(props) {
  const [noteText , setNoteText] =useState('');
  const characterLimit = 2000;
  const handleChange =(event)=>{
    if(noteText.length <characterLimit)
     setNoteText(event.target.value);
  }
  const handleSaveClick =()=>{
    if(noteText.trim().length>0){
      props.addNote(noteText);
      setNoteText("")
    }
  }
  return (
    <div className="note new p-3">
      <textarea 
      rows="8"
       cols="10" 
      placeholder="type to add a note" 
      value={noteText}
      onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit- noteText.length} remaining </small>
        <button className="save py-1 px-3"onClick={handleSaveClick}>save</button>
      </div>
    </div>
  );
}
