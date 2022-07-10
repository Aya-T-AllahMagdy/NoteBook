import React from "react";
import AddNote from "../addNote/addNote";
import Note from "../note/note";
import "./notesList.css";
export default function NoteList(props) {
  return (
    <div classname="notes-list">
      <Note notes={props.notes}deleteNote={props.deleteNote} />
      <AddNote addNote={props.addNote} />
    </div>
  );
}
