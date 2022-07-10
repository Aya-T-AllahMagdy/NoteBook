import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import AddNote from "../addNote/addNote";
import "./note.css";
export default function Note(props) {
  return (
    <Row>
      {props.notes.map((note) => (
        <Col xs={12} md={4} lg={3} key={note.id}>
          <div className="note my-3 p-3">
            <span>{note.text}</span>
            <div className="note-footer">
              <date>{note.date}</date>
              <AiFillDelete className="delete-icon"
               onClick={()=>props.deleteNote(note.id)}
               />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
